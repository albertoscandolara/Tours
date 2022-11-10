import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { ACTIONS } from 'src/app/enums/actions';
import { Action } from 'src/app/models/action';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-action',
  templateUrl: './as-action.component.html',
  styleUrls: [
    './styles/as-action.component.scss',
    './styles/as-action-heliotrope.component.scss',
    './styles/as-action-java.component.scss',
    './styles/as-action-watermelon.component.scss',
  ],
})
export class AsActionComponent {
  /**
   * Action
   */
  public action: Action;

  /**
   * Current tour
   */
  private _tour: Tour;

  /**
   * Tour setter
   */
  @Input() set Tour(value: Tour) {
    this._tour = value;

    this.action =
      ACTIONS[
        Object.keys(ACTIONS).find(
          (key) => key === this._tour.currentAction
        ) as string
      ];
  }

  /**
   * Tour getter
   */
  get Tour(): Tour {
    return this._tour;
  }

  /**
   * Notify closing request to parent
   */
  @Output() OnClose: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Handle modal closing event
   *
   * @returns {void}
   */
  public onClose(): void {
    this.OnClose.emit();
  }
}
