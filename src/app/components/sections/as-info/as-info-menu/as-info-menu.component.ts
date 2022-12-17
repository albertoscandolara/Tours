import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-info-menu',
  templateUrl: './as-info-menu.component.html',
  styleUrls: [
    './styles/as-info-menu.component.scss',
    './styles/as-info-menu-heliotrope.component.scss',
    './styles/as-info-menu-java.component.scss',
    './styles/as-info-menu-watermelon.component.scss',
  ],
})
export class AsInfoMenuComponent {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Constructor
   */
  constructor() {}
}
