import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

import { ComboItem } from 'src/app/models/combo-item';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';
import { Profile } from 'src/app/models/profile.dto';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: 'as-profile',
  templateUrl: './as-profile.component.html',
  styleUrls: [
    './styles/as-profile.component.scss',
    './styles/as-profile-light.component.scss',
    './styles/as-profile-dark.component.scss',
  ],
})
export class AsProfile {
  /**
   * Current color
   */
  @Input() color: COLORS = COLORS.DARK;

  /**
   * Current profile
   */
  @Input() profile: Profile;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}
}
