import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
