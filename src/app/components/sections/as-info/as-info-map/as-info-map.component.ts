import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-info-map',
  templateUrl: './as-info-map.component.html',
  styleUrls: [
    './styles/as-info-map.component.scss',
    './styles/as-info-map-heliotrope.component.scss',
    './styles/as-info-map-java.component.scss',
    './styles/as-info-map-watermelon.component.scss',
  ],
})
export class AsInfoMapComponent {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Constructor
   */
  constructor() {}
}
