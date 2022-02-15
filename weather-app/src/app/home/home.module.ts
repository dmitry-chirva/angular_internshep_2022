import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponentComponent } from './some-component/some-component.component';

@NgModule({
  declarations: [SomeComponentComponent],
  imports: [CommonModule],
  exports: [SomeComponentComponent],
})
export class HomeModule {}
