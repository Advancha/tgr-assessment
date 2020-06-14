import { Routes, RouterModule } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { NotFoundComponent} from './not-found/not-found.component';
import { LocationsComponent } from './locations/locations.component';
import {EditLocationComponent} from './edit-location/edit-location.component';


const routes: Routes = [
  {path: '', component: MapsComponent },
  {path: 'locations', component: LocationsComponent },
  {path: 'locations/edit/:id', component: EditLocationComponent},
  {path: 'locations/create', component: EditLocationComponent},
  {path: '**',  component: NotFoundComponent}
];

export const routing = RouterModule.forRoot(routes);
