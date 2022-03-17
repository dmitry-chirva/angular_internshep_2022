import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { WeatherService } from 'src/core/api/weather/weather.service';

@NgModule({
  declarations: [HomeComponent, FavoriteListComponent],
  imports: [CommonModule, SharedModule],
  exports: [HomeComponent, FavoriteListComponent],
  providers: [WeatherService],
})
export class HomeModule {}
