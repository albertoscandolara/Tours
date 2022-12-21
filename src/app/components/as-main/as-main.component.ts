import { Component } from '@angular/core';

import EMAILJS from '../../emailjs';
import emailjs from 'emailjs-com';
import { SIDES } from 'src/app/enums/sides';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'as-main',
  templateUrl: './as-main.component.html',
  styleUrls: ['./styles/as-main.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
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

  /**
   * Toggle side menu opening status
   *
   * @returns {void}
   */
  public onToggle(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
