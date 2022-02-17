import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from '../shared/components/breadcrumbs/breadcrumbs.component';
import { CurrentWeatherComponent } from '../shared/components/current-weather/current-weather.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BreadcrumbsComponent,
    CurrentWeatherComponent
  ]
})
export class ForecastModule { }
