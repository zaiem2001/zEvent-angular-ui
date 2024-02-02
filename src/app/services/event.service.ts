import { Injectable } from '@angular/core';
import { EVENTS } from 'src/constants/constants';
import { IEvent } from 'src/interface/Event';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  getEventById(eventId: string): IEvent | undefined {
    return EVENTS.find((event) => event.id === eventId);
  }
}
