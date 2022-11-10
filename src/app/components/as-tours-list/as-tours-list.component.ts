import { Component, Input } from '@angular/core';

import json from '../../configurations/tours.json';

import { Tour, TourConfig } from 'src/app/models/tour';
import { COLORS } from 'src/app/enums/card-colors';

@Component({
  selector: 'as-tours-list',
  templateUrl: './as-tours-list.component.html',
  styleUrls: ['./as-tours-list.component.scss'],
})
export class AsToursListComponent {
  /**
   * Tours list from config file
   */
  public tours: Array<Tour> = [];

  /**
   * Constructor
   */
  constructor() {
    this._setTours();
  }

  private _setTours(): void {
    const tours: Array<TourConfig> = json.tours;

    tours.forEach((tour: TourConfig, index: number) => {
      this._setTour(tour, index);
    });
  }

  private _setTour(tour: TourConfig, index: number): void {
    const t: Tour = {
      id: tour.id,
      title: tour.title,
      date: this._setDate(tour.date),
      description: tour.description,
      imagesSignatures: tour.imagesSignatures,
      mainMenuOpen: false,
      visible: tour.visible ?? true,
      color: this._setColor(index),
      previewImageSignature: this._setPreviewImage(tour),
    };

    this.tours.push(t);
  }

  /**
   * Convert date parameter from string to Date type
   * @param {string} date tour JSON configuration 'date' parameter
   * @returns {Date} date time
   */
  private _setDate(date: string): Date {
    return new Date(date);
  }

  /**
   * Set tour color
   * @param {number} index this tour's index
   * @returns {COLORS} one of COLORS enum entries
   */
  private _setColor(index: number): COLORS {
    let color: COLORS = COLORS.WATERMELON;

    const colorsCount: number = Object.keys(COLORS).length;
    color = Object.values(COLORS)[index % colorsCount];

    return color;
  }

  /**
   * Set tour preview image signature
   * @param {TourConfig} tour tour JSON configuration
   * @returns {string} preview image signature
   */
  private _setPreviewImage(tour: TourConfig): string {
    let signature: string = tour.previewImageSignature as string;

    if (!tour.previewImageSignature) {
      if (tour.imagesSignatures.length) {
        signature = tour.imagesSignatures[0];
      } else {
        console.warn('Missing preview image');
      }
    }

    return signature;
  }

  /**
   *
   * @param tour
   */
  public onToggleMenu(tour: Tour) {
    this.tours.forEach((t: Tour) => {
      if (t.id === tour.id) {
        t.mainMenuOpen = !t.mainMenuOpen;
      } else {
        t.mainMenuOpen = false;
      }
    });
  }
}
