import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { Injectable } from '@angular/core';
import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { Observable, map } from 'rxjs';
import { WeatherService } from '../api/weather/weather.service';
import { WeatherTransformService } from './../api/common/weather-transform.service';
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
  favoritesNames: string[] = ['Toronto','Oslo','Odessa'];

  constructor(public favoriteStateService: FavoriteStateService, private weatherService: WeatherService, private weatherTransformService: WeatherTransformService) {
  }

  getFavorites(): CityWeatherInfo[] {
    let result: CityWeatherInfo[] = [];

    this.favoritesNames.map( city => {

      this.getCurrentWeatherForecast(city, 1)
      .subscribe((day) => {
        this.favorites.push(day);
        console.log(this.favorites);
      });
    })
    return result;
  }

  getCurrentWeatherForecast(
    city: string,
    days: number
  ): Observable<CityWeatherInfo> {
    return this.weatherService.getForecastWeather(city, days)
      .pipe(map(data => this.weatherTransformService.toCityWeatherFavorite(data)));
  }

  checkAmountOfFavorites():boolean{
    return this.favorites.length < this.maxAmountOfFavs;
  }
}



