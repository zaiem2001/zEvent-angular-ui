import { MediumEnum, PrivacyEnum } from './enums';

export interface IEventExplore {
  id: string;
  name: string;
  image: string;
  category: string;
  date: { start: string; end: string };
}

export interface IEvent {
  id: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  language: string;
  category: string;
  location: string;
  maxCapacity: number;
  medium: MediumEnum;
  privacy: PrivacyEnum;
  date: { start: string; end: string };
  user: string;
}
