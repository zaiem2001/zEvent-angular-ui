import { Component, Input } from '@angular/core';
import { IEvent } from 'src/interface/Event';

@Component({
  selector: 'app-event',
  styleUrls: ['./event.component.css'],
  template: `
    <div class="events">
      <div
        class="event"
        *ngFor="let event of events"
        [routerLink]="'/explore/' + event.id"
      >
        <div class="event-top">
          <div class="event-image">
            <img src="{{ event.image }}" alt="{{ event.name }}" />
          </div>
          <p class="event-category">{{ event.category }}</p>
          <p class="event-date">{{ event.date.start }}</p>
        </div>
        <h3 class="event-name">{{ event.name }}</h3>
      </div>
    </div>
  `,
})
export class EventComponent {
  @Input() events: IEvent[] = [];
}
