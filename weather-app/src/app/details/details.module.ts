import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbsComponent } from '../shared/components/breadcrumbs/breadcrumbs.component';
import { DetailsTableComponent } from './details-table/details-table.component';
import { DetailsBtnsComponent } from './details-btns/details-btns.component';


@NgModule({
  declarations: [DetailsTableComponent, DetailsBtnsComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BreadcrumbsComponent, DetailsTableComponent, DetailsBtnsComponent]
})
export class DetailsModule { }
