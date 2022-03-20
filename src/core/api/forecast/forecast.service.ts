import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentWeatherData } from '../weather/current-weather.type';
import { WeatherService } from '../weather/weather.service';
import { fromForecasttoCurrentWeatherData } from '../common/mapper-module';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private weatherService: WeatherService) {}

  getCurrentWeatherForecast(
    city: string,
    days: number
  ): Observable<CurrentWeatherData> {
    return this.weatherService.getForecastWeather(city, days).pipe(map(fromForecasttoCurrentWeatherData));
  }
}
