import { Component, EventEmitter, Input, Output } from '@angular/core';

import { COLORS } from 'src/app/enums/colors';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

/**
 * After email submission, this component shows feedback to the user
 */
@Component({
  selector: 'as-email-submission-result',
  templateUrl: './as-email-submission-result.component.html',
  styleUrls: [
    './styles/as-email-submission-result.component.scss',
    './styles/as-email-submission-result-heliotrope.component.scss',
    './styles/as-email-submission-result-java.component.scss',
    './styles/as-email-submission-result-watermelon.component.scss',
  ],
})
export class AsEmailSubmissionResultComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Ok button enabler
   */
  @Input() enableOk: boolean = false;

  /**
   * Retry button enabler
   */
  @Input() enableRetry: boolean = false;

  /**
   * Emits when ok button is pressed
   */
  @Output() OnOk: EventEmitter<void> = new EventEmitter();

  /**
   * Emits when retry button is pressed
   */
  @Output() OnRetry: EventEmitter<void> = new EventEmitter();
  /**
   * Colors enum
   */
  public Colors: typeof COLORS = COLORS;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * Ok button press event handler
   */
  public onOk(): void {
    this.OnOk.emit();
  }

  /**
   * Retry button press event handler
   */
  public onRetry(): void {
    this.OnRetry.emit();
  }
}
