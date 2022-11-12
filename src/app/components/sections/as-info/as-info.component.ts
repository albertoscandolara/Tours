import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-info',
  templateUrl: './as-info.component.html',
  styleUrls: [
    './styles/as-info.component.scss',
    './styles/as-info-heliotrope.component.scss',
    './styles/as-info-java.component.scss',
    './styles/as-info-watermelon.component.scss',
  ],
})
export class AsInfoComponent {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Constructor
   */
  constructor() {}
}
