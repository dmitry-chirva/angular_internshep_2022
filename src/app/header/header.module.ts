import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import {SearchComponent} from "./search/search.component";

@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [SharedModule, ReactiveFormsModule, CommonModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
