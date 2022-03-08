import { Component, Input, EventEmitter, Output } from '@angular/core';
import { ICityWeatherInfo } from '../../../shared/interfaces/city-weather-info.interfaces';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent {
  @Input() info: ICityWeatherInfo | null = null;


  handleFavoriteChange(isFavorite: boolean | undefined) {
    if (this.info) {
      this.info.isFavorite = isFavorite;
    }
  }
}
