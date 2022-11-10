import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/card-colors';

@Component({
  selector: '[as-info-svg]',
  templateUrl: './as-info-svg.component.svg',
  styleUrls: [
    './styles/as-info-svg.component.scss',
    './styles/as-info-svg-heliotrope.component.scss',
    './styles/as-info-svg-java.component.scss',
    './styles/as-info-svg-watermelon.component.scss',
  ],
})
export class AsInfoSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Constructor
   */
  constructor() {}
}
