import { Injectable } from '@angular/core';
import { of, map, Observable, switchMap, forkJoin } from 'rxjs';
import { WeatherService } from '../weather/weather.service';
import { WeatherTransformService } from '../common/weather-transform.service';
import { CityWeatherInfo } from 'src/app/shared/interfaces/city-weather-info.interfaces';
import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';

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

  getHistoryWeatherForecast (city: string, datesRange: Date[]): Observable<CityWeatherInfo[]> {
    return of(datesRange)
      .pipe(switchMap(dates =>
      {
          const requests : Observable<ForecastData>[] = [];

          dates.forEach(date => {
            const forecastHistoryItem = this.weatherService.getHistoryForecast(city, date);
            requests.push(forecastHistoryItem);
          })

          return forkJoin(requests);
        }))
      .pipe(map(data => this.weatherTransformService.toCityWeatherForecast(...data)));
  }
}
