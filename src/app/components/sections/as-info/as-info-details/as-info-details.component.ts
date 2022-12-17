import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-info-details',
  templateUrl: './as-info-details.component.html',
  styleUrls: [
    './styles/as-info-details.component.scss',
    './styles/as-info-details-heliotrope.component.scss',
    './styles/as-info-details-java.component.scss',
    './styles/as-info-details-watermelon.component.scss',
  ],
})
export class AsInfoDetailsComponent {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Constructor
   */
  constructor() {}
}
