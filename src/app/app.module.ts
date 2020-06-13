import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule, GoogleMapsAPIWrapper, MarkerManager} from '@agm/core';
import {LocationsService} from './locations.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationsComponent } from './locations/locations.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    NavbarComponent,
    LocationsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSVphwc84_XC9uu2qVZV6LprRDDmzl-D0'
    })
  ],
  providers: [
    MarkerManager,
    GoogleMapsAPIWrapper,
    LocationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
