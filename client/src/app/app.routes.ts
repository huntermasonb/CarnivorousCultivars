import { Routes } from '@angular/router';
import {FlytrapComponent} from './components/plants/venusFlytrap/flytrap';
import {HomeComponent} from './components/home/home.component';



export const routes: Routes = [
  {path: 'plants/venusflytrap', component: FlytrapComponent},
  {path: '', component: HomeComponent},

  {path: "**", redirectTo: ''}
];
