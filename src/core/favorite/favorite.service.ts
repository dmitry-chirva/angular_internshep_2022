import { Injectable } from '@angular/core';
import { CityWeatherInfo } from './../../app/shared/interfaces/city-weather-info.interfaces';
import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  maxAmountOfFavs: number = 10;
  favorites: CityWeatherInfo[] = [];
  testFavorites: CityWeatherInfo[] = [
    {
      city: 'Toronto',
      date: '2022-02-18',
      temp: '1 °С',
      isFavorite: true,
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '3 km/h',
        humidity: '72%',
      },
    },
    {
      city: 'Stockholm',
      date: '2022-02-18',
      temp: '-3 °С',
      isFavorite: true,
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '5 km/h',
        humidity: '85%',
      },
    },
    {
      city: 'Oslo',
      date: '2022-02-18',
      temp: '-5 °С',
      isFavorite: true,
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '10 km/h',
        humidity: '90%',
      },
    }
  ];

  constructor(public favoriteStateService: FavoriteStateService) {
    this.favorites = this.testFavorites;
  }

  checkAmountOfFavorites():boolean{
    return this.favorites.length < this.maxAmountOfFavs;
  }
}
