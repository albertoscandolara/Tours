import { Component, Input } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

@Component({
  selector: '[as-language-svg]',
  templateUrl: './as-language-svg.component.svg',
  styleUrls: [
    './styles/as-language-svg.component.scss',
    './styles/as-language-svg-light.component.scss',
    './styles/as-language-svg-dark.component.scss',
  ],
})
export class AsLanguageSvgComponent {
  /**
   * Color to display
   */
  @Input() Color: COLORS = COLORS.LIGHT;

  /**
   * Constructor
   */
  constructor() {}
}
