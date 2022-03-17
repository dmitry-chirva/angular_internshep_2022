import { Component } from '@angular/core';

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
  favorites: CityWeatherInfo[] = [];

  constructor(public favoriteStateService: FavoriteStateService, private favoriteService: FavoriteService, private notificationService: NotificationService) {
    this.favorites = this.favoriteService.favorites;
  }
}
