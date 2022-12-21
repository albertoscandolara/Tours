import { trigger, transition, style, animate } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ACTIONS } from 'src/app/enums/actions';
import { COLORS } from 'src/app/enums/colors';
import { Action } from 'src/app/models/action';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-menu',
  templateUrl: './as-menu.component.html',
  styleUrls: ['./styles/as-menu.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('200ms ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AsMenuComponent {
  /**
   * Available colors
   */
  public colors: typeof COLORS = COLORS;

  /**
   * If true, modal is open
   */
  public isModalOpen: boolean = false;
  public currentAction: Action;

  /**
   * Hamburger menu button event emitter
   */
  @Output() OnClick: EventEmitter<void> = new EventEmitter<void>();

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
   *
   * @returns {void}
   */
  public onClose(): void {
    this.OnClose.emit();
  }

  /**
   * Open change language modal
   *
   * @returns {void}
   */
  public onChangeLanguageOpen(): void {
    this.onModalOpen();

    this.currentAction =
      ACTIONS[
        Object.keys(ACTIONS).find((key) => key === 'languages') as string
      ];
  }

  /**
   * Open people modal
   *
   * @returns {void}
   */
  public onPeopleOpen(): void {
    this.onModalOpen();

    this.currentAction =
      ACTIONS[Object.keys(ACTIONS).find((key) => key === 'people') as string];
  }

  /**
   * Handle modal opening event
   *
   * @returns {void}
   */
  public onModalOpen(): void {
    this._toggleModalOpening(true);
  }

  /**
   * Handle modal closing event
   *
   * @returns {void}
   */
  public onModalClose(): void {
    this._toggleModalOpening(false);
  }

  /**
   * Handle modal toggling event
   * @param {boolean} value modal state to set
   *
   * @returns {void}
   */
  public _toggleModalOpening(value: boolean | undefined = undefined) {
    this.isModalOpen = value ?? !this.isModalOpen;
  }
}
