import { Component, Input } from '@angular/core';
import { Stop, Tour } from 'src/app/models/tour';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

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
   * Array of named stops
   */
  public stops: Array<Stop> = [];

  /**
   * Current tour
   */
  public tour: Tour;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * Tour setter
   */
  @Input() set Tour(tour: Tour) {
    this.tour = tour;
    this.stops = this.tour.stops.filter((stop) => stop.name);
  }
}
