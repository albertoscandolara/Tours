import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: '[as-email-svg]',
  templateUrl: './as-email-svg.component.svg',
  styleUrls: [
    './styles/as-email-svg.component.scss',
    './styles/as-email-svg-heliotrope.component.scss',
    './styles/as-email-svg-java.component.scss',
    './styles/as-email-svg-watermelon.component.scss',
  ],
})
export class AsEmailSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Constructor
   */
  constructor() {}
}
