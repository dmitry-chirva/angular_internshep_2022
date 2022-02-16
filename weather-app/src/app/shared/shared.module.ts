import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
  ],
  imports: [BrowserModule, RouterModule],
  exports: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
  ],
})
export class SharedModule {}
