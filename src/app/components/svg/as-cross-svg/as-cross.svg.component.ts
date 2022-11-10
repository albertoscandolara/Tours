import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: '[as-cross-svg]',
  templateUrl: './as-cross-svg.component.svg',
  styleUrls: [
    './styles/as-cross-svg-light.component.scss',
    './styles/as-cross-svg-dark.component.scss',
    './styles/as-cross-svg.component.scss',
    './styles/as-cross-svg-heliotrope.component.scss',
    './styles/as-cross-svg-java.component.scss',
    './styles/as-cross-svg-watermelon.component.scss',
  ],
})
export class AsCrossSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Constructor
   */
  constructor() {}
}
