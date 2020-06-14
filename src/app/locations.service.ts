import { Injectable } from '@angular/core';
import InitLocations from '../assets/locations.json';
import {Marker} from './marker';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  private _locations: Marker[] = [];
  constructor() {
    this.initLocations();
  }

  private initLocations(): void {
    InitLocations.data.forEach((val) => {
      this._locations.push( {
        lat:  val.coordinates[0].toString(),
        lng:  val.coordinates[1].toString(),
        name: val.name
      });
    });
  }
  get locations() {
    return this._locations;
  }

  public getLastIndex() {
    return this._locations.length;
  }
  public getItem(index: number): Marker {
    return this._locations[index];
  }
  public post(loc: Marker): void {
    this._locations.push(loc);
  }
  public put(loc: Marker, index: number): void {
    this._locations[index] = loc;
  }
}
