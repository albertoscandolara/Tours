import { AfterViewInit, Component, Input } from '@angular/core';
import { SVG } from 'src/app/enums/svg';
import { Stop, Tour } from 'src/app/models/tour';

declare let L: any;

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

  /**
   * Leaflet map object
   */
  private _map: any = null;

  /**
   * Color dictionary values for leaflet circle marker
   */
  private _circleMarkerColorDictionary = {
    watermelon: {
      stroke: '#f64c73',
      fill: '#e7a3b3',
    },
    java: {
      stroke: '#20d2bb',
      fill: '#a8ebdf',
    },
    heliotrope: {
      stroke: '#c873f4',
      fill: '#d29eec',
    },
  };

  /**
   * Constructor
   */
  constructor() {}

  ngAfterViewInit() {
    this._initMap();
    this.drawPolyline();
    this._drawMarkerPath();
  }

  /**
   * Initialize leaflet map
   *
   * @returns {void}
   */
  private _initMap(): void {
    this._map = L.map('map').setView([42.5, 12.2], 5);
    this._map.options.minZoom = 2;
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this._map);
  }

  /**
   * Draw marker on stops which are signed as checkpoints
   *
   * @returns {void}
   */
  private _drawMarkerPath(): void {
    const stops: Array<Stop> = this.Tour.stops.filter(
      (stop) => stop.map.checkpoint && stop.map.coordinates
    );

    stops.forEach((stop, index) => {
      this._drawMarker(stop);
    });
  }

  /**
   * Draw stop marker
   *
   * @param {Stop} stop current stop
   * @returns {void}
   */
  private _drawMarker(stop: Stop) {
    const point: any = stop.map.coordinates;

    const isLastStop: boolean =
      this.Tour.stops.indexOf(stop) === this.Tour.stops.length - 1;

    let marker: any = null;
    if (isLastStop) {
      const icon: any = L.divIcon({
        html: SVG.END,
        className: 'div-icon-leaflet',
        iconSize: [30, 30],
        iconAnchor: [15, 15],
        popupAnchor: [0, 0],
      });

      marker = new L.Marker([point.lat, point.lng], { icon: icon });
    } else {
      const color = Object.entries(this._circleMarkerColorDictionary).find(
        ([key, value]) => key === this.Tour.color
      )?.[1];

      marker = new L.CircleMarker([point.lat, point.lng], {
        radius: 7,
        stroke: true,
        color: color?.stroke,
        weight: 2,
        opacity: 1,
        fill: true,
        fillColor: color?.fill,
        fillOpacity: 1,
      });
    }

    marker.addTo(this._map);
  }

  /**
   * Draw polyline connecting stops with coordinates
   *
   * @returns {void}
   */
  private drawPolyline(): void {
    const points: any = this.Tour.stops
      .filter((stop) => stop.map.coordinates)
      .map((stop) => [stop.map.coordinates?.lat, stop.map.coordinates?.lng]);

    const color = Object.entries(this._circleMarkerColorDictionary).find(
      ([key, value]) => key === this.Tour.color
    )?.[1].stroke;

    const polyline = L.polyline(points, { color: color });

    polyline.addTo(this._map);

    this._map.fitBounds(polyline.getBounds());
  }
}
