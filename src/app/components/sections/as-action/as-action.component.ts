import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ACTIONS } from 'src/app/enums/actions';
import { COLORS } from 'src/app/enums/colors';
import { Action } from 'src/app/models/action';
import { Tour } from 'src/app/models/tour';

@Component({
  selector: 'as-action',
  templateUrl: './as-action.component.html',
  styleUrls: [
    './styles/as-action.component.scss',
    './styles/as-action-dark.component.scss',
    './styles/as-action-light.component.scss',
    './styles/as-action-heliotrope.component.scss',
    './styles/as-action-java.component.scss',
    './styles/as-action-watermelon.component.scss',
  ],
})
export class AsActionComponent {
  /**
   * List of available colors
   */
  public colors: typeof COLORS = COLORS;

  /**
   * Current action
   */
  private _action: Action;

  /**
   * Current tour
   */
  private _tour: Tour;

  /**
   * Current color
   */
  private _color: COLORS;

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

    this._color = this._tour.color;
  }

  /**
   * Color setter
   */
  @Input() set color(value: COLORS) {
    this._color = value;
  }

  /**
   * Action setter
   */
  @Input() set action(value: Action) {
    this._action = value;
  }

  /**
   * Tour getter
   */
  get Tour(): Tour {
    return this._tour;
  }

  /**
   * Action getter
   */
  get action(): Action {
    return this._action;
  }

  /**
   * Color getter
   */
  get color(): COLORS {
    return this._color;
  }

  /**
   * Closing event emitter
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
