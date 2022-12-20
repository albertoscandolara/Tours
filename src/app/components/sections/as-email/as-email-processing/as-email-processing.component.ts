import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

import { STRING_EMPTY } from 'src/app/constants/constants';
import { COLORS } from 'src/app/enums/colors';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-email-processing',
  templateUrl: './as-email-processing.component.html',
  styleUrls: [
    './styles/as-email-processing.component.scss',
    './styles/as-email-processing-heliotrope.component.scss',
    './styles/as-email-processing-java.component.scss',
    './styles/as-email-processing-watermelon.component.scss',
  ],
})
export class AsEmailProcessingComponent {
  /**
   * Colors enum
   */
  public Colors: typeof COLORS = COLORS;

  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Loading text to display
   */
  @Input() Text: string = STRING_EMPTY;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}
}
