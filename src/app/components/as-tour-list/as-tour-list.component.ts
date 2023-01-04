import { trigger, transition, style, animate } from '@angular/animations';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  SecurityContext,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { STRING_EMPTY } from 'src/app/constants/constants';
import { COLORS } from 'src/app/enums/colors';
import { Tour, Image } from 'src/app/models/tour';
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
    trigger('fadeInOutBckImg', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('2s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AsTourListComponent implements OnInit, OnDestroy {
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
   * rxjs interval subscription
   */
  private _intervalSubscription: Subscription;

  /**
   * List of available images to use as tour background slider
   */
  public backgroundImages: Array<Image> = [];

  /**
   * Current slider image index
   */
  public currentBackgroundImageIndex: number = 0;

  /**
   * Constructor
   */
  constructor(public translationsService: TranslationsService) {}

  /**
   * A callback method that is invoked immediately after the default
   * change detector has checked the directive's data-bound properties
   * for the first time, and before any of the view or content children
   * have been checked. It is invoked only once when the directive is instantiated.
   */
  ngOnInit(): void {
    this.backgroundImages = this.Tour.images.filter(
      (image) => image.showPreview
    );

    this._changeImgIndex();

    this._intervalSubscription = interval(4000).subscribe((x) =>
      this._changeImgIndex()
    );
  }

  /**
   * A callback method that performs custom clean-up, invoked immediately before
   * a directive, pipe, or service instance is destroyed.
   */
  ngOnDestroy(): void {
    this._intervalSubscription.unsubscribe;
  }

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

  /**
   * Change background image index
   *
   * @returns {void}
   */
  private _changeImgIndex(): void {
    this.currentBackgroundImageIndex =
      this.currentBackgroundImageIndex === this.backgroundImages.length - 1
        ? 0
        : ++this.currentBackgroundImageIndex;
  }
}
