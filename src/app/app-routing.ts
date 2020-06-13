import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { LocationsComponent } from './locations/locations.component';


const routes: Routes = [
  {path: '', component: MapsComponent },
  //{path: 'map', component: MapsComponent },
  {path: 'locations', component: LocationsComponent },
  {path: '***',  component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);
