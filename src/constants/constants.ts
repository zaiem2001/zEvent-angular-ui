import { IEvent, IEventExplore } from 'src/interface/Event';
import { MediumEnum, PrivacyEnum } from 'src/interface/enums';

export const CATEGORIES: string[] = [
  'All',
  'Music',
  'Technology',
  'Games',
  'Sports',
  'Arts',
  'Entertainment',
  'Fashion',
  'Kids',
  'Life Style',
  'Other',
];

export const EVENTS: IEvent[] = [
  {
    id: '1',
    image: '//unsplash.it/600/500',
    name: 'Blockchain',
    category: 'Technology',
    date: { start: '04 April', end: '04 June' },
    user: 'Zaiem',

    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nesciunt quo praesentium alias labore aliquam nemo facilis excepturi. Ipsum eum officiis minus totam harum, itaque dolores esse necessitatibus repellendus obcaecati quas maxime ipsa quam rem ullam repellat incidunt, laboriosam nam inventore. Eligendi vitae illum eaque ipsa laudantium qui accusantium ut ea adipisci illo nesciunt explicabo, numquam repudiandae molestiae id sunt. Culpa dolore dicta, numquam necessitatibus repellat aliquid iure eius. Incidunt id iure similique vero. Numquam facere odit aspernatur iste sint earum, corrupti est nulla consequatur quasi, ipsum tenetur? Corporis deleniti consectetur vitae. Est pariatur iure autem in quasi sint labore?',
    duration: '10 min',
    language: 'English',
    location: 'Ottawa ON',
    maxCapacity: 12,
    medium: MediumEnum.OFFLINE,
    privacy: PrivacyEnum.PUBLIC,
  },
  {
    id: '2',
    image: '//unsplash.it/200/500',
    name: 'Football',
    category: 'Sports',
    date: { start: '04 June', end: '12 Apr' },

    user: 'Zaiem',

    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium ipsa modi sequi?',
    duration: '10 min',
    language: 'English',
    location: 'Ottawa ON',
    maxCapacity: 12,
    medium: MediumEnum.OFFLINE,
    privacy: PrivacyEnum.PUBLIC,
  },
];
