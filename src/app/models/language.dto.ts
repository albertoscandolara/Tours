import { LANGUAGES_ISO_CODES } from '../enums/languages';

export interface Language {
  id: number;
  ISOCode: LANGUAGES_ISO_CODES;
  description: string;
  descriptionISO: string;
}
