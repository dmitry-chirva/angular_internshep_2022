import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BtnGroupsComponent } from './components/forecast-btn-group/btn-groups.component';
import { TableComponent } from './components/table/table.component';
import { FavoriteToggleComponent } from './components/favorite-toggle/favorite-toggle.component';
import { NotificationComponent } from './components/notification/notification.component';
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    BtnGroupsComponent,
    TableComponent,
    FavoriteToggleComponent,
    NotificationComponent,
    CardComponent,
    LoaderComponent,
  ],
  imports: [BrowserModule, RouterModule, BrowserAnimationsModule],
  exports: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    BtnGroupsComponent,
    TableComponent,
    FavoriteToggleComponent,
    NotificationComponent,
    CardComponent,
    LoaderComponent
  ],
})
export class SharedModule {}
