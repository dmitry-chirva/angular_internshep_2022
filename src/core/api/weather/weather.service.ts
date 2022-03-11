import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Forecast } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  readonly BASE_URL = 'http://api.weatherapi.com/v1/';
  readonly API_KEY = 'b88614b3fb684e8b996104153220302';

  constructor(private http: HttpClient) {}

  getForecastWeather(
    city = 'Kiev',
    days = 1,
    aqi = 'no',
    alerts = 'no'
  ): Observable<Forecast> {
    return this.http.get<Forecast>(
      `${this.BASE_URL}forecast.json?key=${this.API_KEY}&q=${city}&days=${days}&aqi=${aqi}&alerts=${alerts}`
    );
  }

  getCurrentWeather(
    latitude: number,
    longitude: number
  ): Observable<CurrentLocationWeather> {
    return this.http.get<CurrentLocationWeather>(
      `${this.BASE_URL}current.json?key=${this.API_KEY}&q=${latitude},${longitude}&aqi=no`
    );
  }
}
