import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STRING_EMPTY } from 'src/app/constants/constants';
import { toursImagesFolderPath } from 'src/app/constants/paths';
import { COLORS } from 'src/app/enums/colors';
import { Tour } from 'src/app/models/tour';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-tour-list',
  templateUrl: './as-tour-list.component.html',
  styleUrls: [
    './styles/as-tour-list.component.scss',
    './styles/as-tour-list-heliotrope.component.scss',
    './styles/as-tour-list-java.component.scss',
    './styles/as-tour-list-watermelon.component.scss',
  ],
})
export class AsTourListComponent {
  /**
   * Colors enum
   */
  public Colors = COLORS;

  /**
   * If true, modal is open
   */
  public isModalOpen: boolean = false;

  /**
   * Tour configuration object
   */
  @Input() Tour: Tour;

  /**
   * Menu opened event emitter
   */
  @Output() OnToggleMenu: EventEmitter<Tour> = new EventEmitter<Tour>();

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * Menu toggler handler
   */
  public onToggleMenu(): void {
    this.OnToggleMenu.emit(this.Tour);
  }

  /**
   * Gallery button click handler
   */
  public onClickGallery(): void {
    this.onModalOpen();

    this.Tour.currentAction = this.isModalOpen ? 'gallery' : STRING_EMPTY;
  }

  /**
   * Info button click handler
   *
   * @returns {void}
   */
  public onClickInfo(): void {
    this.onModalOpen();

    this.Tour.currentAction = this.isModalOpen ? 'info' : STRING_EMPTY;
  }

  /**
   * Mail button click handler
   *
   * @returns {void}
   */
  public onClickEmail(): void {
    this.onModalOpen();

    this.Tour.currentAction = this.isModalOpen ? 'email' : STRING_EMPTY;
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
   * Handle modal opening event
   *
   * @returns {void}
   */
  public onModalOpen(): void {
    this._toggleModalOpening(true);
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
