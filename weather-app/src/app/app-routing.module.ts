import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from './details/details.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from './home/home.component';

const appRouts: Routes = [
  { path: '', component: HomeComponent },
  { path: ':city/details', component: DetailsComponent },
  { path: ':city/details/tomorrow', component: DetailsComponent },
  { path: ':city/details/:forecast', component: ForecastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRouts)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
