import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { BASE_URL, API_KEY, DATE_NOW_STR } from './constants-api';
import { ForecastI } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationI } from 'src/app/shared/interfaces/search-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(
    town = 'Kiev',
    days = 1,
    aqi = 'no',
    alerts = 'no'
  ): Observable<ForecastI> {
    return this.http.get<ForecastI>(
      `${BASE_URL}forecast.json?key=${API_KEY}&q=${town}&days=${days}&aqi=${aqi}&alerts=${alerts}`
    );
  }

  getCurrentLocation(position: any): Observable<CurrentLocationI> {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    return this.http.get<CurrentLocationI>(
      `${BASE_URL}current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`
    );
  }

  getCoords(): Promise<any> {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    );
  }
}
