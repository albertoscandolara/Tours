import { Component } from '@angular/core';

import EMAILJS from '../../emailjs';
import emailjs from 'emailjs-com';

@Component({
  selector: 'as-main',
  templateUrl: './as-main.component.html',
  styleUrls: ['./styles/as-main.component.scss'],
})
export class AsMainComponent {
  /**
   * Constructor
   */
  constructor() {
    emailjs.init(EMAILJS.public_key);
  }
}
