import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';
import { Sections } from './enums/sections';

@Component({
  selector: 'as-info',
  templateUrl: './as-info.component.html',
  styleUrls: [
    './styles/as-info.component.scss',
    './styles/as-info-heliotrope.component.scss',
    './styles/as-info-java.component.scss',
    './styles/as-info-watermelon.component.scss',
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class AsInfoComponent {
  /**
   * Sections enum for template reference
   */
  public sections: typeof Sections = Sections;

  /**
   * Currently open section
   * See Sections enum for a complete list of available sections.
   */
  public section: Sections = Sections.DETAILS;

  /**
   * Current tour
   */
  @Input() Tour: Tour;

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Details button click handler
   */
  public onOpenDetails(): void {
    this.section = this.sections.DETAILS;
  }

  /**
   * Map button click handler
   */
  public onOpenMap(): void {
    this.section = this.sections.MAP;
  }
}
