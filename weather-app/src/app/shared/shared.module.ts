import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';

@NgModule({
  declarations: [CurrentWeatherComponent],
  imports: [BrowserModule,
  RouterModule],
  exports: [CurrentWeatherComponent],
})
export class SharedModule {}
