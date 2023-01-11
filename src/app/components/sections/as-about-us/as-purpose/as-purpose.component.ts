import { Component, Input, OnInit } from '@angular/core';

import json from '../../../../configurations/purpose.json';

import { TranslationsService } from 'src/app/services/translations-service/translations.service';
import { Purpose } from 'src/app/models/profile.dto';
import { COLORS } from 'src/app/enums/colors';
import { purposeImagesFolderPath } from 'src/app/constants/paths';

@Component({
  selector: 'as-purpose',
  templateUrl: './as-purpose.component.html',
  styleUrls: [
    './styles/as-purpose.component.scss',
    './styles/as-purpose-light.component.scss',
    './styles/as-purpose-dark.component.scss',
  ],
})
export class AsPurpose implements OnInit {
  /**
   * Current color
   */
  @Input() color: COLORS = COLORS.DARK;

  /**
   * Purpose object
   */
  public purpose: Purpose;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * ngOnInit method
   */
  ngOnInit(): void {
    this._setPurpose();
  }

  /**
   * Set contacts list
   *
   * @returns {void}
   */
  private _setPurpose(): void {
    const purpose = json.purpose;
    purpose.paragraphs = purpose.paragraphs.map((paragraph) => {
      paragraph.images = paragraph.images.map(
        (image) => `${purposeImagesFolderPath}/${image}`
      );
      return paragraph;
    });
    this.purpose = purpose;
  }
}
