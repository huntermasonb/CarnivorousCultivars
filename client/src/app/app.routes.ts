import { Routes } from '@angular/router';
import {FlytrapComponent} from './components/plants/venusFlytrap/flytrap';
import {HomeComponent} from './components/home/home.component';
import {PitcherComponent} from './components/plants/pitcher/pitcher.component';
import {SundewComponent} from './components/plants/sundew/sundew.component';

export const routes: Routes = [
  {path: 'plants/venusflytrap', component: FlytrapComponent},
  {path: 'plants/pitcher', component: PitcherComponent},
  {path: 'plants/sundew', component: SundewComponent},
  {path: '', component: HomeComponent},

  {path: "**", redirectTo: ''}
];
