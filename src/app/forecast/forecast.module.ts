import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ForecastComponent } from './forecast.component';

@NgModule({
  declarations: [
    ForecastComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ForecastComponent,
  ]
})
export class ForecastModule { }
