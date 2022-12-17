import { AfterViewInit, Component, Input } from '@angular/core';
import { Tour } from 'src/app/models/tour';

declare let L: {
  map: (arg0: string) => {
    (): any;
    new (): any;
    setView: { (arg0: number[], arg1: number): any; new (): any };
  };
  tileLayer: (
    arg0: string,
    arg1: { attribution: string }
  ) => { (): any; new (): any; addTo: { (arg0: any): void; new (): any } };
};

@Component({
  selector: 'as-info-map',
  templateUrl: './as-info-map.component.html',
  styleUrls: [
    './styles/as-info-map.component.scss',
    './styles/as-info-map-heliotrope.component.scss',
    './styles/as-info-map-java.component.scss',
    './styles/as-info-map-watermelon.component.scss',
  ],
})
export class AsInfoMapComponent implements AfterViewInit {
  /**
   * Current tour
   */
  @Input() Tour: Tour;

  private _map: any = null;

  /**
   * Constructor
   */
  constructor() {}

  ngAfterViewInit() {
    this._initMap();
  }

  private _initMap(): void {
    this._map = L.map('map').setView([51.505, -0.09], 13);
    this._map.options.minZoom = 2;
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this._map);
  }
}
