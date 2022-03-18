import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BtnGroupsComponent } from './components/btn-groups/btn-groups.component';
import { FavoriteToggleComponent } from './components/favorite-toggle/favorite-toggle.component';
import { NotificationComponent } from './components/notification/notification.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    BtnGroupsComponent,
    FavoriteToggleComponent,
    NotificationComponent,
    ForecastCardComponent,
  ],
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule],
  exports: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    BtnGroupsComponent,
    FavoriteToggleComponent,
    NotificationComponent,
    ForecastCardComponent,
  ],
})
export class SharedModule {}
