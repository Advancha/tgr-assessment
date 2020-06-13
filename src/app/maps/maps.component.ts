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
  zoom = 10;
  mapType = 'roadmap';
  selected = false;

  constructor(private locationsService: LocationsService) { }

  ngOnInit() {
    this.markers = this.locationsService.locations;
    this.setCurrentLocation();
  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    }
  }

  onMarkerClick(event) {
    console.log(event.label);
    this.name = event.label;
    this.lng = event.longitude;
    this.lat = event.latitude;
    this.selected = true;
  }
  onMapClick(event) {
    this.selected = false;
    /*console.log(event);
    this.markers.push({
      lat: event.coords.lat,
      lng: event.coords.lng,
      name: 'start location'
    });

    console.log(this.markers);*/
  }
}
