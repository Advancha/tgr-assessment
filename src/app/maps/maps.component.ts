import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../locations.service';
import {Marker} from '../marker';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  markers: Marker[];
  lat: number;
  lng: number;
  name = '';
  zoom = 8;
  mapType = 'roadmap';
  selected = false;

  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
    this.markers = this.locationsService.locations;
    this.setLocation();
  }

  private setLocation() {
    if (this.markers.length > 0) {
      this.lat = +this.markers[0].lat;
      this.lng = +this.markers[0].lng;
    }
  }

  onMarkerClick(event) {
    console.log(event.label);
    this.name = event.label;
    this.lng = event.longitude;
    this.lat = event.latitude;
    this.selected = true;
  }
  onMapClick() {
    this.selected = false;
  }
}
