import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponentComponent } from './some-component/some-component.component';
import { SharedModule } from '../shared/shared.module';
import { CurrentWeatherComponent } from '../shared/components/current-weather/current-weather.component';

@NgModule({
  declarations: [SomeComponentComponent],
  imports: [CommonModule, SharedModule], // add SharedModule
  exports: [SomeComponentComponent, CurrentWeatherComponent], // add CurrentWeatherComponent
})
export class HomeModule {}
