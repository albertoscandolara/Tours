import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { STRING_EMPTY } from 'src/app/constants/constants';
import { COLORS } from 'src/app/enums/colors';
import { Action } from 'src/app/models/action';

@Component({
  selector: 'as-header',
  templateUrl: './as-header.component.html',
  styleUrls: [
    './styles/as-header.component.scss',
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
  constructor() {}

  /**
   * closing event handler
   */
  public onClose(): void {
    this.OnClose.emit();
  }
}
