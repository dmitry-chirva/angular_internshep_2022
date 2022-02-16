import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomeComponentComponent } from './some-component/some-component.component';
import { SharedModule } from '../shared/shared.module';
import { CurrentWeatherComponent } from '../shared/components/current-weather/current-weather.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FavoriteItemComponent } from './favorite-list/favorite-item/favorite-item.component';

@NgModule({
  declarations: [SomeComponentComponent, FavoriteListComponent, FavoriteItemComponent],
  imports: [CommonModule, SharedModule], 
  exports: [SomeComponentComponent, CurrentWeatherComponent, FavoriteListComponent, FavoriteItemComponent],
})
export class HomeModule {}
