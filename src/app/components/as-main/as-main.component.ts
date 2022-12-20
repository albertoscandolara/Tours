import { Component } from '@angular/core';

import EMAILJS from '../../emailjs';
import emailjs from 'emailjs-com';
import { SIDES } from 'src/app/enums/sides';

@Component({
  selector: 'as-main',
  templateUrl: './as-main.component.html',
  styleUrls: ['./styles/as-main.component.scss'],
})
export class AsMainComponent {
  /**
   * Available sides
   */
  public sides: typeof SIDES = SIDES;

  /**
   * Hamburger menu opening status
   */
  public isMenuOpen: boolean = false;

  /**
   * Constructor
   */
  constructor() {
    emailjs.init(EMAILJS.public_key);
  }

  public onToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
