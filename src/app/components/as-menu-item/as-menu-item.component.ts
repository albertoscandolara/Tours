import { EventEmitter, SimpleChanges } from '@angular/core';

import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { COLORS } from 'src/app/enums/colors';

/**
 * Tour item menu, comprehending moon-quarter button to toggle it, as well as tour navigation buttons
 */
@Component({
  selector: 'as-menu-item',
  templateUrl: './as-menu-item.component.html',
  styleUrls: [
    './styles/as-menu-item.component.scss',
    './styles/as-menu-item-heliotrope.component.scss',
    './styles/as-menu-item-java.component.scss',
    './styles/as-menu-item-watermelon.component.scss',
  ],
})
export class AsMenuItemComponent {
  @ViewChild('waves', { static: true }) waves: ElementRef | undefined;
  @ViewChild('svgMenu', { static: true }) svgMenu: ElementRef | undefined;

  /**
   * Colors enum
   */
  public Colors = COLORS;

  /**
   * Boolean value indicating if main menu is open
   */
  public isOpen: boolean = false;

  /**
   * Boolean value setting menu color
   */
  @Input() Color: COLORS = this.Colors.WATERMELON;

  /**
   * 'isOpen' property setter
   */
  @Input() set IsOpen(value: boolean) {
    if (this.isOpen === value) {
      return;
    }
    this._setMenuAnimation();
    this.isOpen = value;
  }

  /**
   * Opening menu notification event emitter
   */
  @Output() OnToggleMenu: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Gallery click notification event emitter
   */
  @Output() OnClickGallery: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Info click notification event emitter
   */
  @Output() OnClickInfo: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Mail click notification event emitter
   */
  @Output() OnClickEmail: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Constructor
   */
  constructor() {}

  /**
   * Handle moon-quarter click event
   *
   * @returns {void}
   */
  public onMoonQuarterClick(): void {
    this._setWavesAnimation();
    this.OnToggleMenu.emit();
  }

  /**
   * Manage moon-quarter click animation
   *
   * @returns {void}
   */
  private _setWavesAnimation(): void {
    const animateClass: string = 'animate';
    this.waves?.nativeElement.classList.add(animateClass);
    const animationTimeout: number = 300;
    setTimeout(() => {
      this.waves?.nativeElement.classList.remove(animateClass);
    }, animationTimeout);
  }

  /**
   * Manage svg-menu toggle animation
   *
   * @returns {void}
   */
  private _setMenuAnimation(): void {
    if (this.isOpen) {
      this.collapseMenu();
    } else {
      this.expandMenu();
    }
  }

  /**
   * Manage svg-menu wave opening animation
   *
   * @returns {void}
   */
  public expandMenu(): void {
    let svgmenu = this.svgMenu?.nativeElement;
    let animates = svgmenu.querySelectorAll('path > animate');
    let firstDuration = parseInt(animates[1].getAttribute('dur'));
    let secondDuration = parseInt(animates[2].getAttribute('dur'));

    animates[1].beginElement();
    setTimeout(() => animates[2].beginElement(), firstDuration);
    setTimeout(
      () => animates[3].beginElement(),
      firstDuration + secondDuration
    );
    this._animateItems(svgmenu, {
      dur: '0.6s',
      keyPoints: '0; 1',
      keySplines: '0.35 0 1 1',
      from: '0',
      to: '360',
    });
  }

  /**
   * Manage svg-menu wave closing animation
   *
   * @returns {void}
   */
  public collapseMenu(): void {
    const svgmenu: SVGElement = this.svgMenu?.nativeElement;
    const animates: Array<SVGAnimateElement> = Array.from(
      svgmenu.querySelectorAll('animate')
    );
    const firstDuration: number = parseInt(
      animates[2].getAttribute('dur') as string
    );
    const secondDuration: number = parseInt(
      animates[1].getAttribute('dur') as string
    );

    animates[2].beginElement();
    setTimeout(() => animates[1].beginElement(), firstDuration);
    setTimeout(
      () => animates[0].beginElement(),
      firstDuration + secondDuration
    );
    this._animateItems(svgmenu, {
      dur: '0.4s',
      keyPoints: '1; 0',
      keySplines: '0 0 0.65 1',
      from: '360',
      to: '0',
    });
  }

  /**
   * Manage svg-menu button animation
   *
   * @param {SVGElement} svgmenu svg menu native element
   * @param {any} cfg configuration
   * @returns {void}
   */
  private _animateItems(svgmenu: SVGElement, cfg: any): void {
    const circles: Array<SVGCircleElement> = Array.from(
      svgmenu.querySelectorAll('.circles-group > .circle')
    );

    circles.forEach((circle: SVGCircleElement) => {
      const animateMotion: SVGAnimateMotionElement = circle.querySelector(
        'animateMotion'
      ) as SVGAnimateMotionElement;
      if (animateMotion) {
        animateMotion.setAttribute('dur', cfg.dur);
        animateMotion.setAttribute('keyPoints', cfg.keyPoints);
        animateMotion.setAttribute('keySplines', cfg.keySplines);
        animateMotion.beginElement();
      }

      const animateTransform: SVGAnimateTransformElement = circle.querySelector(
        'animateTransform'
      ) as SVGAnimateTransformElement;
      if (animateTransform) {
        animateTransform.setAttribute('dur', cfg.dur);
        animateTransform.setAttribute('from', cfg.from);
        animateTransform.setAttribute('to', cfg.to);
        animateTransform.beginElement();
      }
    });
  }

  public onClickEmail(): void {
    this.OnClickEmail.emit();
  }

  public onClickInfo(): void {
    this.OnClickInfo.emit();
  }

  public onClickGallery(): void {
    this.OnClickGallery.emit();
  }
}
