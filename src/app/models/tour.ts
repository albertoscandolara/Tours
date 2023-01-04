import { COLORS } from '../enums/colors';
import { CURRENCIES } from '../enums/currencies';

export interface Tour {
  id: number;
  title: string;
  period: Period;
  stops: Array<Stop>;
  description: string;
  price: Price;
  services: Array<string>;
  images: Array<Image>;
  mainMenuOpen: boolean;
  visible: boolean;
  currentAction: string;
  color: COLORS;
}

export interface TourConfig {
  id: number;
  title: string;
  period: PeriodConfig;
  stops: Array<Stop>;
  description: string;
  price: PriceConfig;
  services: Array<string>;
  images: Array<Image>;
  visible?: boolean;
  color?: COLORS;
}

interface PeriodConfig {
  start: string;
  end: string;
}

interface Period {
  start: Date;
  end: Date;
}

interface PriceConfig {
  currency: string;
  single: number;
  couple: number;
}

interface Price {
  currency: CURRENCIES;
  single: number;
  couple: number;
}

export interface Stop {
  name: string;
  map: {
    checkpoint: boolean;
    coordinates?: Coordinates;
  };
}

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface Image {
  src: string;
  showPreview: boolean;
}
