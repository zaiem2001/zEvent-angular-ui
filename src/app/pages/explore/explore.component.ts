import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { CATEGORIES, EVENTS } from 'src/constants/constants';
import { IEventExplore } from 'src/interface/Event';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  categories: string[] = [];
  events: IEventExplore[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.categories = CATEGORIES;

    this.route.queryParams;

    this.route.queryParams.subscribe((query) => {
      const { category } = query;
      this.events = this.eventService.getExplorePageEvents(category);
    });
  }
}
