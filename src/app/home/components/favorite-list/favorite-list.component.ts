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
export class FavoriteListComponent implements OnInit {
  favorites: CityWeatherInfo[];
  readonly maxAmountOfFavs: number = 1;

  constructor(public favoriteStateService: FavoriteStateService, private FavoriteService: FavoriteService, private notificationService: NotificationService) {
    this.favorites = this.FavoriteService.favorites;
    this.checkAmountOfFavorites();
  }

  ngOnInit() {}
  getElement(event:any){}

  checkAmountOfFavorites(){
    if(this.favorites.length>this.maxAmountOfFavs){
      this.notificationService.create('error',`fav cities amount is more than ${this.maxAmountOfFavs}!`);
    }
  }

}
