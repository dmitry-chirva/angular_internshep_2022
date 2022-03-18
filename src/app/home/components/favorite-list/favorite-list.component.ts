import { Component, OnInit } from '@angular/core';

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
export class FavoriteListComponent implements OnInit  {
  favorites: CityWeatherInfo[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(){
    this.favorites = this.favoriteService.favorites;
  }
}
