import { trigger, transition, style, animate } from '@angular/animations';
import {
  Component,
  Output,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { COLORS } from 'src/app/enums/colors';
import { ComboItem } from 'src/app/models/combo-item';
import { TranslationsService } from 'src/app/services/translations-service/translations.service';

@Component({
  selector: 'as-combobox',
  templateUrl: './as-combobox.component.html',
  styleUrls: [
    './styles/as-combobox.component.scss',
    './styles/as-combobox-light.component.scss',
    './styles/as-combobox-dark.component.scss',
  ],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ height: 0 }),
        animate('.2s linear', style({ height: '*' })),
      ]),
      transition(':leave', [
        style({ height: '*' }),
        animate('.2s linear', style({ height: 0 })),
      ]),
    ]),
  ],
})
export class AsComboboxComponent implements OnInit {
  /**
   * Current color
   */
  @Input() color: COLORS = COLORS.DARK;

  /**
   * Combobox item list
   */
  @Input() items: Array<ComboItem> = [];

  /**
   * Selected item event emitter
   */
  @Output() OnItemChange: EventEmitter<ComboItem> = new EventEmitter();

  /**
   * Selected item
   */
  public selectedItem: ComboItem;

  /**
   * Boolean storing combobox opening status
   */
  public isOpen: boolean = false;

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
    this.onItemChange(this.items[0]);
  }

  /**
   * Handle combobox item change
   *
   * @returns {void}
   */
  public onItemChange(item: ComboItem): void {
    if (!this.selectedItem) {
      this.selectedItem = item;
      this.OnItemChange.emit(this.selectedItem);
      return;
    }

    if (this.selectedItem && item.id === this.selectedItem.id) {
      return;
    }

    this.selectedItem = item;
    this.OnItemChange.emit(this.selectedItem);
    this.onToggle();
  }

  /**
   * Toggle combobox status
   *
   * @returns {void}
   */
  public onToggle(): void {
    this.isOpen = !this.isOpen;
  }
}
