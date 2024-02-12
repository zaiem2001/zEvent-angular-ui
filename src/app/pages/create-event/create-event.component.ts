import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorHandler } from 'src/app/helpers/error.helper';
import { EventService } from 'src/app/services/event.service';
import { CATEGORIES } from 'src/constants/constants';
import { IEvent } from 'src/interface/Event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  categories: string[] = [];
  @Output() addEvent = new EventEmitter<IEvent>();

  constructor(private eventService: EventService, private router: Router) {}

  ngOnInit(): void {
    this.categories = CATEGORIES;
  }

  onSubmit = (formData: NgForm) => {
    const { value } = formData;
    const eventData = {
      ...value,
      date: { start: value.start, end: value.end },
    };

    this.eventService.createEvent(eventData).subscribe((response) => {
      this.addEvent.emit(response);
      this.router.navigate(['/dashboard'], {
        queryParams: { tab: 'events' },
      });
    });
  };
}
