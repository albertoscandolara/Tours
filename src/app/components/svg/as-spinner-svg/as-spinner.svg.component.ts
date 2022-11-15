import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: 'as-spinner-svg',
  templateUrl: './as-spinner-svg.component.svg',
  styleUrls: [
    './styles/as-spinner-svg.component.scss',
    './styles/as-spinner-svg-heliotrope.component.scss',
    './styles/as-spinner-svg-java.component.scss',
    './styles/as-spinner-svg-watermelon.component.scss',
  ],
})
export class AsSpinnerSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Constructor
   */
  constructor() {}
}
