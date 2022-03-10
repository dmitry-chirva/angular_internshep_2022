import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BtnGroupsComponent } from './components/btn-groups/btn-groups.component';
import { FavoriteToggleComponent } from './components/favorite-toggle/favorite-toggle.component';
import { ForecastCardComponent } from './components/forecast-card/forecast-card.component';

@NgModule({
  declarations: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    BtnGroupsComponent,
    FavoriteToggleComponent,
    ForecastCardComponent,
  ],
  imports: [BrowserModule, RouterModule],
  exports: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    BtnGroupsComponent,
    FavoriteToggleComponent,
    ForecastCardComponent,
  ],
})
export class SharedModule {}
