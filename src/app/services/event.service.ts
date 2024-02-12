import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL, EVENTS } from 'src/constants/constants';
import { IEvent } from 'src/interface/Event';

const eventUrls = {
  explore: `${BASE_URL}/events/all`,
  byId: `${BASE_URL}/events/`,
  users: `${BASE_URL}/events`,
};

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

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
