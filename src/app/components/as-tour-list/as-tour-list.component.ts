import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STRING_EMPTY } from 'src/app/constants/constants';
import { toursImagesFolderPath } from 'src/app/constants/paths';
import { COLORS } from 'src/app/enums/card-colors';
import { Tour } from 'src/app/models/tour';

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
export class AsTourListComponent implements OnInit {
  /**
   * Colors enum
   */
  public Colors = COLORS;

  /**
   * Tour configuration object
   */
  @Input() Tour: Tour;

  /**
   * Menu opened event emitter
   */
  @Output() OnToggleMenu: EventEmitter<Tour> = new EventEmitter<Tour>();

  /**
   * Images folder path
   */
  public previewImagePath: string = STRING_EMPTY;

  /**
   * Constructor
   */
  constructor() {}

  ngOnInit(): void {
    this.previewImagePath = `${toursImagesFolderPath}/${this.Tour.id}/${this.Tour.previewImageSignature}`;
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
    console.log('onGalleryClick');
  }

  /**
   * Info button click handler
   */
  public onClickInfo(): void {
    console.log('onInfoClick');
  }

  /**
   * Mail button click handler
   */
  public onClickEmail(): void {
    console.log('onMailClick');
  }
}
