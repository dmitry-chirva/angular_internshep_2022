import { Injectable } from '@angular/core';
import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { WeatherTransformService } from './../api/common/weather-transform.service';
import { WeatherService } from '../api/weather/weather.service';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  favorites: CityWeatherInfo[] = [];
  favoritesNames: string[] = [];

  constructor(
    private favoriteStateService: FavoriteStateService,
    private weatherService: WeatherService,
    private weatherTransformService: WeatherTransformService
  ) {
    this.favoritesNames = this.favoriteStateService.getFavoriteCities();
  }
  ngOnInit(){
    this.favoritesNames = this.favoriteStateService.getFavoriteCities();
  }

  getFavorites(): CityWeatherInfo[] {
    this.favoritesNames.map( city => {
      this.weatherService.getForecastWeather(city, 1)
        .pipe(
          map(data => this.weatherTransformService.toCityWeatherFavorite(data))
        )
        .subscribe((city) => {
          this.favorites.push(city);
        });
    });
    return this.favorites;
  }

  checkAmountOfFavorites():boolean{
    return this.favoriteStateService.moreCitiesCanBeAdded();
  }
}
