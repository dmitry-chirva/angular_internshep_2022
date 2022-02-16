import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsTableComponent } from './details-table/details-table.component';
import { DetailsBtnsComponent } from './details-btns/details-btns.component';

@NgModule({
  declarations: [DetailsTableComponent, DetailsBtnsComponent],
  imports: [CommonModule],
  exports: [DetailsTableComponent, DetailsBtnsComponent]
})
export class DetailsModule { }
