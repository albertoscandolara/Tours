import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STRING_EMPTY } from 'src/app/constants/constants';
import { toursImagesFolderPath } from 'src/app/constants/paths';
import { COLORS } from 'src/app/enums/colors';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-navbar',
  templateUrl: './as-navbar.component.html',
  styleUrls: ['./styles/as-navbar.component.scss'],
})
export class AsNavbarComponent {
  /**
   * Constructor
   */
  constructor() {}
}
