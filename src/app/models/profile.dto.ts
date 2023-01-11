import { COUNTRIES } from '../enums/countries';

export interface Purpose {
  paragraphs: Array<Paragraph>;
}

export interface Profile {
  id: number;
  name: string;
  surname: string;
  nickname: string;
  nationality: COUNTRIES;
  profileImgSignature: string;
  contacts: Array<Contact>;
  paragraphs: Array<Paragraph>;
}

interface Contact {
  id: number;
  contactId: number;
  enabled: boolean;
  link: string;
}

interface Paragraph {
  text: string;
  images: Array<string>;
}
