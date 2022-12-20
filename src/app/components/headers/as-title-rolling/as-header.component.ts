import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { COLORS } from 'src/app/enums/colors';
import { Action } from 'src/app/models/action';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-header',
  templateUrl: './as-header.component.html',
  styleUrls: [
    './styles/as-header.component.scss',
    './styles/as-header-dark.component.scss',
    './styles/as-header-light.component.scss',
    './styles/as-header-heliotrope.component.scss',
    './styles/as-header-java.component.scss',
    './styles/as-header-watermelon.component.scss',
  ],
})
export class AsHeaderComponent {
  /**
   * Colors enum
   */
  public Colors: typeof COLORS = COLORS;

  /**
   * Current action
   */
  @Input() Action: Action;

  /**
   * Color to display
   */
  @Input() Color: COLORS = COLORS.WATERMELON;

  /**
   * Closing event emitter
   */
  @Output() OnClose: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * Closing event handler
   */
  public onClose(): void {
    this.OnClose.emit();
  }
}
