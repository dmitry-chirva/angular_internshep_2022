import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CityWeatherInfo } from '../../../shared/interfaces/city-weather-info.interfaces';

@Component({
  selector: 'app-favorite-item',
  templateUrl: './favorite-item.component.html',
  styleUrls: ['./favorite-item.component.scss'],
})
export class FavoriteItemComponent {
  @Input() info: CityWeatherInfo | null = null;


  handleFavoriteChange(isFavorite: boolean | undefined) {
    // console.log('this.info', this.info);
    if (this.info) {
      this.info.isFavorite = isFavorite;
      if(!this.info.isFavorite){
        //false

      }
      else{
        //true

      }
    }
  }


}
