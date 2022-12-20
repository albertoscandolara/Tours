import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'as-navbar',
  templateUrl: './as-navbar.component.html',
  styleUrls: ['./styles/as-navbar.component.scss'],
})
export class AsNavbarComponent {
  /**
   * Hamburger menu button event emitter
   */
  @Output() OnClick: EventEmitter<void> = new EventEmitter();

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Hamburger menu button event emitter
   *
   * @returns {void}
   */
  public onClick(): void {
    this.OnClick.emit();
  }
}
