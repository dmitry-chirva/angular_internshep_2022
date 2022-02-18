import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ForecastComponent } from './forecast.component';
import { ForecastCardComponent } from "./component/forecast-card/forecast-card.component";

@NgModule({
  declarations: [
    ForecastComponent,
    ForecastCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ForecastComponent,
    ForecastCardComponent
  ]
})
export class ForecastModule { }
