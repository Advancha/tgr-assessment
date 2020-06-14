import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './app-routing';
import { AppComponent } from './app.component';
import { MapsComponent } from './maps/maps.component';
import {AgmCoreModule, GoogleMapsAPIWrapper, MarkerManager} from '@agm/core';
import {NgxPaginationModule} from 'ngx-pagination';
import {LocationsService} from './locations.service';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationsComponent } from './locations/locations.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CreateBtnComponent } from './create-btn/create-btn.component';
import { EditLocationComponent } from './edit-location/edit-location.component';
import { EditBtnComponent } from './edit-btn/edit-btn.component';
import {PageNumberContainerService} from './page-number-container.service';


@NgModule({
  declarations: [
    AppComponent,
    MapsComponent,
    NavbarComponent,
    LocationsComponent,
    NotFoundComponent,
    CreateBtnComponent,
    CreateBtnComponent,
    EditLocationComponent,
    EditBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBSVphwc84_XC9uu2qVZV6LprRDDmzl-D0'
    })
  ],
  providers: [
    MarkerManager,
    GoogleMapsAPIWrapper,
    LocationsService,
    PageNumberContainerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
