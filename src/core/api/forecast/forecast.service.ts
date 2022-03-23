import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherService } from '../weather/weather.service';
import { WeatherTransformService } from '../common/weather-transform.service';
import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(
    private weatherTransformService: WeatherTransformService,
    private weatherService: WeatherService
  ) {}

  getCurrentWeatherForecast(
    city: string,
    days: number
  ): Observable<CityWeatherInfo[]> {
    return this.weatherService
      .getForecastWeather(city, days)
      .pipe(
        map((data) => this.weatherTransformService.toCityWeatherForecast(data))
      );
  }
}
