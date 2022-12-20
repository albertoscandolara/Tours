import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-gallery',
  templateUrl: './as-gallery.component.html',
  styleUrls: [
    './styles/as-gallery.component.scss',
    './styles/as-gallery-heliotrope.component.scss',
    './styles/as-gallery-java.component.scss',
    './styles/as-gallery-watermelon.component.scss',
  ],
})
export class AsGalleryComponent {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}
}
