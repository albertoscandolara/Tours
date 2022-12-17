import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: '[as-map-svg]',
  templateUrl: './as-map-svg.component.svg',
  styleUrls: [
    './styles/as-map-svg.component.scss',
    './styles/as-map-svg-heliotrope.component.scss',
    './styles/as-map-svg-java.component.scss',
    './styles/as-map-svg-watermelon.component.scss',
  ],
})
export class AsMapSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Constructor
   */
  constructor() {}
}
