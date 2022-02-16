import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';


@NgModule({
  declarations: [
    CurrentWeatherComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    CurrentWeatherComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule {}
