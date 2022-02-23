import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ForecastI } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationI } from 'src/app/shared/interfaces/search-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  readonly BASE_URL = 'http://api.weatherapi.com/v1/';
  readonly API_KEY = 'b88614b3fb684e8b996104153220302';

  constructor(private http: HttpClient) {}

  getForecastWeather(
    town = 'Kiev',
    days = 1,
    aqi = 'no',
    alerts = 'no'
  ): Observable<ForecastI> {
    return this.http.get<ForecastI>(
      `${this.BASE_URL}forecast.json?key=${this.API_KEY}&q=${town}&days=${days}&aqi=${aqi}&alerts=${alerts}`
    );
  }

  getCurrentWeather(position: any): Observable<CurrentLocationI> {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    return this.http.get<CurrentLocationI>(
      `${this.BASE_URL}current.json?key=${this.API_KEY}&q=${latitude},${longitude}&aqi=no`
    );
  }
}
