import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { CATEGORIES } from 'src/constants/constants';
import { IEvent } from 'src/interface/Event';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent implements OnInit {
  categories: string[] = [];
  events: IEvent[] = [];
  filteredEvents: IEvent[] = [];
  currentCategory = 'All';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit(): void {
    this.categories = CATEGORIES;

    this.eventService.getExplorePageEvents().subscribe((events) => {
      this.events = events;

      this.route.queryParams.subscribe((query) => {
        const { category } = query;
        this.currentCategory = category || 'All';

        if (!this.currentCategory || this.currentCategory === 'All') {
          this.filteredEvents = this.events;
        } else {
          this.filteredEvents = this.events.filter(
            (event) =>
              event.category.toLowerCase() ===
              this.currentCategory.toLowerCase()
          );
        }
      });
    });
  }
}
