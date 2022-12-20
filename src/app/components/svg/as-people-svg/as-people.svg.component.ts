import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: '[as-people-svg]',
  templateUrl: './as-people-svg.component.svg',
  styleUrls: [
    './styles/as-people-svg.component.scss',
    './styles/as-people-svg-light.component.scss',
    './styles/as-people-svg-dark.component.scss',
  ],
})
export class AsPeopleSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS = COLORS.LIGHT;

  /**
   * Constructor
   */
  constructor() {}
}
