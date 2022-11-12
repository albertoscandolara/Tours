import { Component, Input } from '@angular/core';

import json from '../../configurations/tours.json';

import { Tour, TourConfig } from 'src/app/models/tour';
import { COLORS } from 'src/app/enums/colors';
import { STRING_EMPTY } from 'src/app/constants/constants';
import { toursImagesFolderPath } from 'src/app/constants/paths';

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
      imagesSignatures: this._setImagePaths(tour),
      mainMenuOpen: false,
      visible: tour.visible ?? true,
      currentAction: STRING_EMPTY,
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
   * Prepend images path to images signature
   * @param {TourConfig} tour tour JSON configuration
   *
   * @returns {Array<string>} an array containing path/signature images
   */
  private _setImagePaths(tour: TourConfig): Array<string> {
    const signatures: Array<string> = tour.imagesSignatures.map(
      (signature) => `${toursImagesFolderPath}/${tour.id}/${signature}`
    );
    return signatures;
  }

  /**
   * Set tour color
   * @param {number} index this tour's index
   * @returns {COLORS} one of COLORS enum entries
   */
  private _setColor(index: number): COLORS {
    const defaultColor: COLORS = COLORS.WATERMELON;
    let color: COLORS = defaultColor;

    const colorsToExclude: Array<COLORS> = [COLORS.LIGHT, COLORS.DARK];
    const selectableColors: Array<string> = Object.values(COLORS).filter(
      (value) => !Object.values(colorsToExclude).includes(value)
    );

    const colorsCount: number = selectableColors.length;
    color = selectableColors[index % colorsCount] as COLORS;

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

    if (signature) {
      signature = `${toursImagesFolderPath}/${tour.id}/${signature}`;
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
