import { Action } from '../models/action';

export const ACTIONS: { [key: string]: Action } = {
  email: {
    id: 0,
    name: 'email',
    text: 'Email',
    orderBy: 0,
    selector: 'as-email-svg',
  },
  gallery: {
    id: 1,
    name: 'gallery',
    text: 'Gallery',
    orderBy: 1,
    selector: 'as-gallery-svg',
  },
  info: {
    id: 2,
    name: 'info',
    text: 'Info',
    orderBy: 2,
    selector: 'as-info-svg',
  },
  languages: {
    id: 3,
    name: 'language',
    text: 'Change language',
    orderBy: 3,
    selector: 'as-language-svg',
  },
  people: {
    id: 4,
    name: 'people',
    text: 'Who we are',
    orderBy: 4,
    selector: 'as-people-svg',
  },
};
