import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tour } from 'src/app/models/tour';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

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
   * Details button click event emitter
   */
  @Output() OnOpenDetails: EventEmitter<void> = new EventEmitter();

  /**
   * Map button click event emitter
   */
  @Output() OnOpenMap: EventEmitter<void> = new EventEmitter();

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * On details button click handler
   */
  public onOpenDetails(): void {
    this.OnOpenDetails.emit();
  }

  /**
   * On map button click handler
   */
  public onOpenMap(): void {
    this.OnOpenMap.emit();
  }
}
