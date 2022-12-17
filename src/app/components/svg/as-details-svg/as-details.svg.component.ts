import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: '[as-details-svg]',
  templateUrl: './as-details-svg.component.svg',
  styleUrls: [
    './styles/as-details-svg.component.scss',
    './styles/as-details-svg-heliotrope.component.scss',
    './styles/as-details-svg-java.component.scss',
    './styles/as-details-svg-watermelon.component.scss',
  ],
})
export class AsDetailsSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Constructor
   */
  constructor() {}
}
