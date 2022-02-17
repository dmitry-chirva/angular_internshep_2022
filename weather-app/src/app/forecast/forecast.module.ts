import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from '../shared/components/breadcrumbs/breadcrumbs.component';
import { CurrentWeatherComponent } from '../shared/components/current-weather/current-weather.component';
import { ForecastCardComponent } from "./component/forecast-card/forecast-card.component";
import { DetailsBtnsComponent } from '../shared/components/details-btns/details-btns.component';



@NgModule({
  declarations: [ForecastCardComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [BreadcrumbsComponent,
    CurrentWeatherComponent,
    ForecastCardComponent,
    DetailsBtnsComponent
  ]
})
export class ForecastModule { }
