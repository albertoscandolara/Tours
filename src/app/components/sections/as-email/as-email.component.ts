import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-email',
  templateUrl: './as-email.component.html',
  styleUrls: [
    './styles/as-email.component.scss',
    './styles/as-email-heliotrope.component.scss',
    './styles/as-email-java.component.scss',
    './styles/as-email-watermelon.component.scss',
  ],
})
export class AsEmailComponent {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Constructor
   */
  constructor() {}
}
