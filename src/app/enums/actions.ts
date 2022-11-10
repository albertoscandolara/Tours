import { Action } from '../models/action';

export const ACTIONS: { [key: string]: Action } = {
  email: {
    id: 0,
    name: 'email',
    text: 'email',
    orderBy: 0,
    selector: 'as-email-svg',
  },
  gallery: {
    id: 1,
    name: 'gallery',
    text: 'gallery',
    orderBy: 1,
    selector: 'as-gallery-svg',
  },
  info: {
    id: 2,
    name: 'info',
    text: 'info',
    orderBy: 2,
    selector: 'as-info-svg',
  },
};
