import { Component } from '@angular/core';

import json from '../../configurations/tours.json';

import { Tour, TourConfig, Image } from 'src/app/models/tour';
import { COLORS } from 'src/app/enums/colors';
import { STRING_EMPTY } from 'src/app/constants/constants';
import { toursImagesFolderPath } from 'src/app/constants/paths';
import { CURRENCIES } from 'src/app/enums/currencies';

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

  /**
   * Set tours list
   *
   * @returns {void}
   */
  private _setTours(): void {
    const tours: Array<TourConfig> = json.tours;

    tours.forEach((tour: TourConfig, index: number) => {
      this._setTour(tour, index);
    });
  }

  /**
   * Set single tour
   *
   * @returns {void}
   */
  private _setTour(tour: TourConfig, index: number): void {
    const t: Tour = {
      id: tour.id,
      title: tour.title,
      period: {
        start: this._setDate(tour.period.start),
        end: this._setDate(tour.period.end),
      },
      stops: tour.stops,
      description: tour.description,
      price: {
        currency: tour.price.currency as CURRENCIES,
        single: tour.price.single,
        couple: tour.price.couple,
      },
      services: tour.services,
      images: this._setImages(tour),
      mainMenuOpen: false,
      visible: tour.visible ?? true,
      currentAction: STRING_EMPTY,
      color: this._setColor(index),
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
   * @returns {Array<Image>} an array containing path/signature images
   */
  private _setImages(tour: TourConfig): Array<Image> {
    const images: Array<Image> = tour.images.map((image) => ({
      src: `${toursImagesFolderPath}/${tour.id}/${image.src}`,
      showPreview: image.showPreview,
    }));
    return images;
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
   * Manage menu opening, all other svg menus must close
   *
   * @param tour tour whose svg menu has been toggled
   * @returns {void}
   */
  public onToggleMenu(tour: Tour): void {
    this.tours.forEach((t: Tour) => {
      if (t.id === tour.id) {
        t.mainMenuOpen = !t.mainMenuOpen;
      } else {
        t.mainMenuOpen = false;
      }
    });
  }
}
