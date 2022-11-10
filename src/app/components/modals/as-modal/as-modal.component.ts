import { Component, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'as-modal',
  templateUrl: './as-modal.component.html',
  styleUrls: ['./styles/as-modal.component.scss'],
})
export class AsModalComponent {
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
