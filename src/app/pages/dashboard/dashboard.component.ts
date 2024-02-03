import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { SIDEBAR_ITEMS } from 'src/constants/constants';
import { IEvent } from 'src/interface/Event';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  events: IEvent[] = [];
  sidebar_content: any;
  active_tab: string = 'events';

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getLoggedInUsersEvents('1');
    this.sidebar_content = SIDEBAR_ITEMS;

    this.route.queryParams.subscribe((query) => {
      const { tab } = query;
      this.active_tab = tab || 'events';
    });
  }
}
