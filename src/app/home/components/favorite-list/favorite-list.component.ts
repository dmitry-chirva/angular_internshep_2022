import { Component } from '@angular/core';

import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { StorageService } from 'src/core/storage/storage.service';
import { FavoriteService } from 'src/core/favorite/favorite.service';
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
  providers: [FavoriteStateService, StorageService],
})
export class FavoriteListComponent  {
  favorites: CityWeatherInfo[] = [];

  constructor(private favoriteService: FavoriteService) {

    // this.favorites = this.favoriteService.favorites;
    this.favorites = this.favoriteService.getFavorites();

    // if(this.favoriteService.checkAmountOfFavorites()){
    //   // this.notificationService.show('Advise', `There is less than ${this.favoriteService.maxAmountOfFavs} favorite cities in your list, you can add more!`);
    // }
    // else{
    //   // this.notificationService.show('Error', `There is max amount of cities in your list of favorites!`);
    // };
  }


}
