import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import {SearchComponent} from "./search/search.component";

@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [SharedModule, ReactiveFormsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
