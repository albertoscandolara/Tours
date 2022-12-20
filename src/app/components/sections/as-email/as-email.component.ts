import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

import { EMAIL } from 'src/app/constants/constants';
import { Tour } from 'src/app/models/tour';

import { COLORS } from 'src/app/enums/colors';
import { AsEmailFormComponent } from './as-email-form/as-email-form.component';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-email',
  templateUrl: './as-email.component.html',
  styleUrls: [
    './styles/as-email.component.scss',
    './styles/as-email-heliotrope.component.scss',
    './styles/as-email-java.component.scss',
    './styles/as-email-watermelon.component.scss',
  ],
})
export class AsEmailComponent {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Email address that will receive the email
   */
  @Input() email: string = EMAIL;

  /**
   * Closing event emitter
   */
  @Output() OnClose: EventEmitter<void> = new EventEmitter();

  @ViewChild(AsEmailFormComponent)
  private _formComponent: AsEmailFormComponent;

  /**
   * Colors enum
   */
  public Colors: typeof COLORS = COLORS;

  /**
   * If true, email submission is being retried
   */
  public retrying: boolean = false;

  /**
   * If true, sending email is ongoing
   */
  public firstTime: boolean = true;

  /**
   * If true, sending email is ongoing
   */
  public submitting: boolean = false;

  /**
   * If true, email has been sent correctly
   */
  public submitError: boolean = false;

  /**
   * If true, email has been sent correctly
   */
  public submitOk: boolean = false;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * Email has been sent correctly.
   * Handle section closing.
   *
   * @returns {void}
   */
  public onClose(): void {
    this.OnClose.emit();
  }

  /**
   * Submission has been triggered.
   * While waiting for result, show spinner.
   *
   * @returns {void}
   */
  public onSubmitting(): void {
    this.firstTime = false;
    this.submitOk = false;
    this.submitError = false;
    this.submitting = true;
  }

  /**
   * Mail submission has gone wrong.
   * Give feedback to user.
   *
   * @returns {void}
   */
  public onSubmitError(): void {
    this.retrying = false;
    this.submitOk = false;
    this.submitError = true;
    this.submitting = false;
  }

  /**
   * Mail submission was succesfull.
   * Give feedback to user.
   *
   * @returns {void}
   */
  public onSubmitSuccess(): void {
    this.retrying = false;
    this.submitOk = true;
    this.submitError = false;
    this.submitting = false;
  }

  /**
   * There has been a problem while sending the email.
   * Try once more.
   *
   * @returns {void}
   */
  public onRetry(): void {
    this.retrying = true;
    this.submitting = true;
    this._formComponent.onRetry();
  }

  /**
   * There has been a problem while senting the email.
   * Undo to let user eventually copy the message text to paste it to its own mail provider.
   *
   * @returns {void}
   */
  public onUndo(): void {
    this.submitOk = false;
    this.submitError = false;
    this.submitting = false;
  }
}
