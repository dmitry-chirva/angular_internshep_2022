import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CurrentWeatherComponent } from './components/current-weather/current-weather.component';
import { ThemeSwitcherComponent } from './components/theme-switcher/theme-switcher.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { DetailsBtnsComponent } from './components/details-btns/details-btns.component';


@NgModule({
  declarations: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    DetailsBtnsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    CurrentWeatherComponent,
    BreadcrumbsComponent,
    ThemeSwitcherComponent,
    DetailsBtnsComponent,
  ]

})
export class SharedModule {}
