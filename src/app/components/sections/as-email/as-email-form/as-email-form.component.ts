import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';

import { EMAIL, STRING_EMPTY } from 'src/app/constants/constants';

import EMAILJS from '../../../../emailjs';
import emailjs from 'emailjs-com';

import { COLORS } from 'src/app/enums/colors';
import { Tour } from 'src/app/models/tour';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-email-form',
  templateUrl: './as-email-form.component.html',
  styleUrls: [
    './styles/as-email-form.component.scss',
    './styles/as-email-form-heliotrope.component.scss',
    './styles/as-email-form-java.component.scss',
    './styles/as-email-form-watermelon.component.scss',
  ],
})
export class AsEmailFormComponent implements OnInit {
  /**
   * NgForm reference to trigger submission from component
   */
  @ViewChild('form') form: NgForm;

  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Email submission event emitter
   */
  @Output() OnSubmitting: EventEmitter<void> = new EventEmitter();

  /**
   * Email submission error event emitter
   */
  @Output() OnSubmitError: EventEmitter<void> = new EventEmitter();

  /**
   * Email submission completion event emitter
   */
  @Output() OnSubmitOk: EventEmitter<void> = new EventEmitter();

  /**
   * Email submission event emitter
   */
  //  @Input() set OnRetry(value: any) {
  //   this.onRetry();
  //  };

  /**
   * Colors enum
   */
  public Colors: typeof COLORS = COLORS;

  /**
   * Email address that will receive the email
   */
  public email: string = EMAIL;

  /**
   * Email form group with inputs and validations
   */
  public emailForm: FormGroup;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * OnInit lifecycle hook
   */
  ngOnInit(): void {
    this.emailForm = new FormGroup({
      object: new FormControl(STRING_EMPTY, [Validators.required]),
      recipient: new FormControl(STRING_EMPTY, [
        Validators.required,
        Validators.email,
      ]),
      sender: new FormControl(STRING_EMPTY, [
        Validators.required,
        Validators.email,
      ]),
      message: new FormControl(STRING_EMPTY, [
        Validators.required,
        Validators.minLength(1),
      ]),
      tourId: new FormControl(-1, [Validators.required]),
      tourTitle: new FormControl(STRING_EMPTY, [Validators.required]),
      stops: new FormControl(STRING_EMPTY, [Validators.required]),
      start: new FormControl(STRING_EMPTY, [Validators.required]),
      end: new FormControl(STRING_EMPTY, [Validators.required]),
    });
    this._initEmailForm();
  }

  /**
   * Send email through emailjs package
   * @param {SubmitEvent} event form submission event
   *
   * @returns {void}
   */
  public onFormSubmit(): void {
    (event as SubmitEvent).preventDefault();

    if (!this.emailForm.valid) {
      return;
    }

    this.OnSubmitting.emit();

    const form: HTMLFormElement = (event as SubmitEvent)
      .target as HTMLFormElement;

    const prePromiseMillisecondsTime: number = Date.now();
    emailjs.sendForm(EMAILJS.serviceID, EMAILJS.templateID, form).then(
      () => {
        this._executeAfterMinTime(prePromiseMillisecondsTime, this.OnSubmitOk);
      },
      (error) => {
        this._executeAfterMinTime(
          prePromiseMillisecondsTime,
          this.OnSubmitError
        );
      }
    );
  }

  /**
   * Prevent emitter to emit before animation has finished,
   * otherwise there will be a tick
   *
   * @param {number} prePromiseMillisecondsTime milliseconds when promise started
   * @param {EventEmitter} eventEmitter emitter to trigger
   */
  private _executeAfterMinTime(
    prePromiseMillisecondsTime: number,
    eventEmitter: EventEmitter<void>
  ): void {
    const minTimeInMilliseconds: number = 2000;
    const postPromiseMillisecondsTime: number = Date.now();
    const difference: number =
      postPromiseMillisecondsTime - prePromiseMillisecondsTime;

    if (difference < minTimeInMilliseconds) {
      const remainingTime: number = minTimeInMilliseconds - difference;
      setTimeout(() => eventEmitter.emit(), remainingTime);
    } else {
      eventEmitter.emit();
    }
  }

  /**
   * There has been a problem while senting the email.
   * Try once more.
   *
   * @returns {void}
   */
  public onRetry(): void {
    this.form.ngSubmit.emit();
  }

  /**
   * Initialize form controls
   *
   * @returns {void}
   */
  private _initEmailForm(): void {
    this.emailForm.controls['object'].setValue(
      `Tour '${this.Tour.title}' request information`
    );
    this.emailForm.controls['recipient'].setValue(`${this.email}`);
    this.emailForm.controls['sender'].setValue(STRING_EMPTY);
    this.emailForm.controls['message'].setValue(STRING_EMPTY);

    this.emailForm.controls['tourId'].setValue(this.Tour.id);
    this.emailForm.controls['tourTitle'].setValue(this.Tour.title);
    this.emailForm.controls['stops'].setValue(
      this.Tour.stops
        .filter((stop) => stop.name)
        .map((stop) => stop.name)
        .join(', ')
    );
    this.emailForm.controls['start'].setValue(`${this.Tour.period.start}`);
    this.emailForm.controls['end'].setValue(`${this.Tour.period.end}`);
  }
}
