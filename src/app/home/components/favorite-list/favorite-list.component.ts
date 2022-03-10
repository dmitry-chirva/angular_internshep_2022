import { Component, OnInit } from '@angular/core';

import { CityWeatherInfo } from '../../../shared/interfaces/city-weather-info.interfaces';

import { FavoriteStateService } from '../../../../core/favorites-state/favorite-state.service';
import { NotificationService } from 'src/core/api/notification/notification.service';
import { StorageService } from '../../../../core/storage/storage.service';
import { FavoriteService } from 'src/core/favorite/favorite.service';
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
  providers: [FavoriteStateService, StorageService],
})
export class FavoriteListComponent {
  favorites: CityWeatherInfo[];
  readonly maxAmountOfFavs: number = 1;
  readonly favoritesElems = document.querySelectorAll('favorite__item');

  constructor(public favoriteStateService: FavoriteStateService, private FavoriteService: FavoriteService, private notificationService: NotificationService) {
    this.favorites = this.FavoriteService.favorites;
    console.log(this.favorites);
    this.checkAmountOfFavorites();
  }

  checkAmountOfFavorites(){
    if(this.favorites.length>this.maxAmountOfFavs){
      this.notificationService.create('error',`fav cities amount is more than ${this.maxAmountOfFavs}!`);
    }
  }

  getElement(event:any){

    console.log()

  }


}
