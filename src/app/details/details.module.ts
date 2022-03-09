import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details.component';
import { DetailsTableComponent } from './components/details-table/details-table.component';

@NgModule({
  declarations: [
    DetailsComponent,
    DetailsTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DetailsComponent,
    DetailsTableComponent
  ]
})
export class DetailsModule { }
