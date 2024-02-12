import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
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
  active_tab: { query: string; name: string } = {
    query: 'events',
    name: 'Events',
  };
  userDetails = this.authService.getLoggedInUserDetails() || null;

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.userDetails = this.authService.getLoggedInUserDetails();
    this.eventService.getLoggedInUsersEvents().subscribe((events) => {
      this.events = events || [];
    });

    this.sidebar_content = SIDEBAR_ITEMS;
    const totalItems = this.sidebar_content.top.concat(
      this.sidebar_content.bottom
    );

    this.route.queryParams.subscribe((query) => {
      const { tab } = query;
      if (tab) {
        this.active_tab = totalItems.find((item: any) => item.query === tab);
      }
    });
  }
}
