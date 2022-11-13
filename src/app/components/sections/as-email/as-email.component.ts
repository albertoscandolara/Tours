import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EMAIL, STRING_EMPTY } from 'src/app/constants/constants';
import { Tour } from 'src/app/models/tour';

import EMAILJS from '../../../emailjs';
import emailjs from 'emailjs-com';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
export class AsEmailComponent implements OnInit {
  /**
   * If true, sending email is ongoing
   */
  public emailSubmitting: boolean = false;

  /**
   * Email address that will receive the email
   */
  public email: string = EMAIL;

  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Email form group with inputs and validations
   */
  public emailForm: FormGroup;

  /**
   * Constructor
   */
  constructor() {}

  /**
   * OnInit lifecycle hook
   */
  ngOnInit(): void {
    this.emailForm = new FormGroup({
      subject: new FormControl(STRING_EMPTY, [Validators.required]),
      to: new FormControl(STRING_EMPTY, [
        Validators.required,
        Validators.email,
      ]),
      from: new FormControl(STRING_EMPTY, [
        Validators.required,
        Validators.email,
      ]),
      message: new FormControl(STRING_EMPTY, [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
    this._initEmailForm();
  }

  /**
   * Send email through emailjs package
   * @param {SubmitEvent} event form submission event
   */
  public onClickSubmit(event: Event): void {
    (event as SubmitEvent).preventDefault();

    if (!this.emailForm.valid) {
      return;
    }

    this.emailSubmitting = true;
    const form: HTMLFormElement = event.target as HTMLFormElement;

    emailjs
      .sendForm(EMAILJS.serviceID, EMAILJS.templateID, form)
      .then(
        () => {},
        (error) => {}
      )
      .then(() => {
        this.emailForm.reset();
        this._initEmailForm();
        this.emailSubmitting = false;
      });
  }

  private _initEmailForm(): void {
    this.emailForm.controls['subject'].setValue(
      `Tour '${this.Tour.title}' request information`
    );
    this.emailForm.controls['to'].setValue(`${this.email}`);
    this.emailForm.controls['from'].setValue(STRING_EMPTY);
    this.emailForm.controls['message'].setValue(STRING_EMPTY);
  }
}
