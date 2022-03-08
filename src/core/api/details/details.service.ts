import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';
import { DataDetailsWeather } from 'src/app/shared/interfaces/details-weather-data.interfaces';
import { CurrentWeatherData } from '../weather/current-weather.type';

import { GeoLocationService } from '../weather/geo-location.service';
import { WeatherService } from '../weather/weather.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(
    private weatherService: WeatherService,
    private geolocationService: GeoLocationService
  ) {}

  getDataForWeatherTable(): Observable<DataDetailsWeather | any> {
    return this.geolocationService.getPosition().pipe(
      switchMap((pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        return this.weatherService.getCurrentWeather(latitude, longitude).pipe(
          switchMap((cw): any => {
            const cityName = cw.location.name;
            return this.weatherService.getForecastWeather(cityName).pipe(
              map((data) => {
                const temp_c: Array<number> = [];
                const feelslike_c: Array<number> = [];
                const wind_kph: Array<number> = [];
                const gust_kph: Array<number> = [];
                const cloud: Array<number> = [];
                const humidity: Array<number> = [];
                const pressure_mb: Array<number> = [];

                data.forecast.forecastday[0].hour.map((v) => {
                  temp_c.push(v.temp_c);
                  feelslike_c.push(v.feelslike_c);
                  wind_kph.push(v.wind_kph);
                  gust_kph.push(v.gust_kph);
                  cloud.push(v.cloud);
                  humidity.push(v.humidity);
                  pressure_mb.push(v.pressure_mb);
                });
                return {
                  temp_c,
                  feelslike_c,
                  wind_kph,
                  gust_kph,
                  cloud,
                  humidity,
                  pressure_mb,
                };
              })
            );
          })
        );
      })
    );
  }

  getCurrentWeatherDetails(): Observable<CurrentWeatherData> {
    return this.geolocationService
      .getPosition()
      .pipe(
        switchMap((pos) => {
          const latitude = pos.coords.latitude;
          const longitude = pos.coords.longitude;
          return this.weatherService
            .getCurrentWeather(latitude, longitude)
            .pipe(
              map((data) => {
                const year = data.location.localtime
                  .split('')
                  .slice(0, 4)
                  .join('');
                const date = data.location.localtime
                  .split('')
                  .slice(8, 10)
                  .join('');
                const month = new Date().toLocaleString('en', {
                  month: 'long',
                });
                const temp = Math.floor(data.current.temp_c);
                const city = `${data.location.name}, ${data.location.country}`;

                return { year, date, month, temp, city };
              })
            );
        })
      )
      .pipe(
        catchError(() =>
          this.weatherService.getForecastWeather().pipe(
            map((data) => {
              const year = data.location.localtime
                .split('')
                .slice(0, 4)
                .join('');
              const date = data.location.localtime
                .split('')
                .slice(8, 10)
                .join('');
              const month = new Date().toLocaleString('en', {
                month: 'long',
              });
              const temp = Math.floor(data.current.temp_c);
              const city = `${data.location.name}, ${data.location.country}`;

              return { year, date, month, temp, city };
            })
          )
        )
      );
  }
}
