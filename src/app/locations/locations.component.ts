import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../locations.service';
import {Marker} from '../marker';
import {PageNumberContainerService} from '../page-number-container.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  markers: Marker[];
  p: number;
  itemsPerPage: number;
  constructor(
    private locationsService: LocationsService,
    private pageNumberContainerService: PageNumberContainerService
  ) {
  }
  ngOnInit(): void {
    this.p = this.pageNumberContainerService.getPage();
    this.itemsPerPage = this.pageNumberContainerService.itemsPerPage;
    this.markers = this.locationsService.locations;
  }
}
