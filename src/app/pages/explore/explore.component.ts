import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    this.categories = CATEGORIES;
    this.events = EVENTS;
  }
}
