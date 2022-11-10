import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/card-colors';

@Component({
  selector: '[as-camera-svg]',
  templateUrl: './as-camera-svg.component.svg',
  styleUrls: [
    './styles/as-camera-svg.component.scss',
    './styles/as-camera-svg-heliotrope.component.scss',
    './styles/as-camera-svg-java.component.scss',
    './styles/as-camera-svg-watermelon.component.scss',
  ],
})
export class AsCameraSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS;

  /**
   * Constructor
   */
  constructor() {}
}
