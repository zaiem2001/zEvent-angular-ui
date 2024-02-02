import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { IEvent } from 'src/interface/Event';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: IEvent | undefined = undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      const { eventId } = param;

      if (eventId) {
        this.event = this.eventService.getEventById(eventId);
      }
    });
  }
}
