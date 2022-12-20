import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ɵnoSideEffects,
} from '@angular/core';
import { SIDES } from 'src/app/enums/sides';

@Component({
  selector: 'as-side-modal',
  templateUrl: './as-side-modal.component.html',
  styleUrls: ['./styles/as-side-modal.component.scss'],
})
export class AsSideModalComponent {
  /**
   * Side from which side menu will appear
   */
  @Input() side: SIDES = SIDES.LEFT;

  /**
   * Notify closing request to parent
   */
  @Output() OnClose: EventEmitter<void> = new EventEmitter<void>();
  /**
   * Constructor
   */
  constructor() {}
  /**
   * Host listener to close modal at click outside
   */
  @HostListener('document:click', ['$event']) onDocumentClick(
    $event: PointerEvent
  ) {
    if (!($event.target as HTMLElement).classList.contains('background')) {
      $event.stopPropagation();
      return;
    }
    this.OnClose.emit();
  }
}
