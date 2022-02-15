import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';


@NgModule({
  declarations: [
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CurrentWeatherComponent
  ]
})
export class SharedModule { }
