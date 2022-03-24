import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  readonly BASE_URL = 'https://api.weatherapi.com/v1/';
  readonly API_KEY = 'b88614b3fb684e8b996104153220302';

  constructor(private http: HttpClient) {}

  getForecastWeather(
    city: string,
    days = 10,
    aqi = 'no',
    alerts = 'no'
  ): Observable<ForecastData> {
    return this.http.get<ForecastData>(
      `${this.BASE_URL}forecast.json?key=${this.API_KEY}&q=${city}&days=${days}&aqi=${aqi}&alerts=${alerts}`
    );
  }

  getHistoryForecast(
    city: string,
    date: Date
  ): Observable<ForecastData> {
    const formattedDate = date.toISOString().split('T')[0];
    return this.http.get<ForecastData>(
      `${this.BASE_URL}history.json?key=${this.API_KEY}&q=${city}&dt=${formattedDate}`
    );
  }

  getCurrentWeatherByCoordinates(
    latitude: number,
    longitude: number
  ): Observable<CurrentLocationWeather> {
    return this.http.get<CurrentLocationWeather>(
      `${this.BASE_URL}current.json?key=${this.API_KEY}&q=${latitude},${longitude}&aqi=no`
    );
  }

  getCurrentWeatherByCity(city : string): Observable<CurrentLocationWeather> {
    return this.http.get<CurrentLocationWeather>(
      `${this.BASE_URL}current.json?key=${this.API_KEY}&q=${city}&aqi=no`
    );
  }
}
