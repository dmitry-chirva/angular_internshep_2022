import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from "@angular/common";

import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header.component';
import { AutocompleteComponent } from "./components/autocomplete/autocomplete.component";

@NgModule({
  declarations: [HeaderComponent, AutocompleteComponent],
  imports: [SharedModule, ReactiveFormsModule, CommonModule, AutocompleteLibModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
