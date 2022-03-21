import { Component, OnInit } from '@angular/core';

import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { NotificationService } from 'src/core/api/notification/notification.service';
import { StorageService } from 'src/core/storage/storage.service';
import { FavoriteService } from 'src/core/favorite/favorite.service';
import { WeatherService } from 'src/core/api/weather/weather.service';
@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss'],
  providers: [FavoriteStateService, StorageService],
})
export class FavoriteListComponent implements OnInit  {

  favorites: CityWeatherInfo[] = [];
  favorite: CityWeatherInfo = {
    date: ''
  };

  constructor(private favoriteService: FavoriteService, private notificationService : NotificationService, private weatherService: WeatherService) {
  }

  ngOnInit(){




    if(this.favoriteService.checkAmountOfFavorites()){
      this.notificationService.show('Error','Your can add only 10 cities to your list of favorites')
    }

    //TODO you lost icon heart on each fav card component
    // this.favoriteService.getFavorites().subscribe((cities)=>{
    //   this.favorites = cities;
    // });
  }



}
