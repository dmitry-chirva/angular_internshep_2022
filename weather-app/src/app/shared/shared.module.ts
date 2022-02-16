import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';

@NgModule({
  declarations: [CurrentWeatherComponent, ThemeSwitcherComponent],
  imports: [BrowserModule],
  exports: [CurrentWeatherComponent, ThemeSwitcherComponent],
})
export class SharedModule {}
