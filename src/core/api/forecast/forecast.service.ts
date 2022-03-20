import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherService } from '../weather/weather.service';
import { toCityWeatherForecast } from '../common/mapper-module';
import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private weatherService: WeatherService) {}

  getCurrentWeatherForecast(
    city: string,
    days: number
  ): Observable<CityWeatherInfo[]> {
    return this.weatherService.getForecastWeather(city, days).pipe(map(toCityWeatherForecast));
  }
}
