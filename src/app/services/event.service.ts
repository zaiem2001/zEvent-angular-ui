import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from 'src/constants/constants';
import { IEvent } from 'src/interface/Event';
import { ErrorHandler } from '../helpers/error.helper';

const eventUrls = {
  create: `${BASE_URL}/events`,
  explore: `${BASE_URL}/events/all`,
  byId: `${BASE_URL}/events/`,
  users: `${BASE_URL}/events`,
};

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient, private errorHandler: ErrorHandler) {}

  createEvent(event: IEvent) {
    return this.http.post<IEvent>(eventUrls.create, {
      ...event,
    });
  }

  getEventById(eventId: string) {
    return this.http.get<IEvent>(`${eventUrls.byId}${eventId}`);
  }

  getExplorePageEvents() {
    return this.http.get<IEvent[]>(eventUrls.explore);
  }

  getLoggedInUsersEvents() {
    return this.http.get<IEvent[]>(eventUrls.users);
  }
}
