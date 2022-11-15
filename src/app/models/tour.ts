import { COLORS } from '../enums/colors';

export interface Tour {
  id: number;
  title: string;
  date: Date;
  description: string;
  start: Start;
  imagesSignatures: Array<string>;
  mainMenuOpen: boolean;
  visible: boolean;
  currentAction: string;
  color: COLORS;
  previewImageSignature?: string;
}

export interface TourConfig {
  id: number;
  title: string;
  date: string;
  description: string;
  start: Start;
  imagesSignatures: Array<string>;
  visible?: boolean;
  previewImageSignature?: string;
  color?: COLORS;
}

interface Start {
  country: string;
  city: string;
  street: string;
  number?: number;
}
