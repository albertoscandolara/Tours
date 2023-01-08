import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  Input,
} from '@angular/core';

import json from '../../../configurations/about us.json';

import { ComboItem } from 'src/app/models/combo-item';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';
import { Profile } from 'src/app/models/profile.dto';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: 'as-about-us',
  templateUrl: './as-about-us.component.html',
  styleUrls: [
    './styles/as-about-us.component.scss',
    './styles/as-about-us-light.component.scss',
    './styles/as-about-us-dark.component.scss',
  ],
})
export class AsAboutUs {
  /**
   * Current color
   */
  @Input() color: COLORS = COLORS.DARK;

  /**
   * Profiles list
   */
  public profiles: Array<Profile> = [];

  /**
   * Combobox items list
   */
  public items: Array<ComboItem> = [];

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {
    this._setItems();
  }

  /**
   * Set items list
   *
   * @returns {void}
   */
  private _setItems(): void {
    this.profiles = json.profiles;
    this.items = this.profiles.map(
      (profile) =>
        ({
          id: profile.id,
          description: `${profile.name} ${profile.surname}`,
        } as ComboItem)
    );
  }

  /**
   * Handle combobox item change
   *
   * @returns {void}
   */
  public onItemChange(item: ComboItem): void {}
}
