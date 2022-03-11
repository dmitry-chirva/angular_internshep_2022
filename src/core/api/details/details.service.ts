import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';
import { DataDetailsWeather } from 'src/app/shared/interfaces/details-weather-data.interfaces';
import { Forecast } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentWeatherData } from '../weather/current-weather.type';

import { GeoLocationService } from '../weather/geo-location.service';
import { WeatherService } from '../weather/weather.service';
import { TransformDataDetailsService } from './transform-data-details.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(
    private weatherService: WeatherService,
    private geolocationService: GeoLocationService,
    private transformDataDetailsService: TransformDataDetailsService
  ) {}

  getDataForWeatherTable(): Observable<DataDetailsWeather | any> {
    return this.geolocationService
      .getPosition()
      .pipe(
        switchMap((pos) => {
          const latitude = pos.coords.latitude;
          const longitude = pos.coords.longitude;
          return this.weatherService
            .getCurrentWeather(latitude, longitude)
            .pipe(
              switchMap((cw): any => {
                const cityName = cw.location.name;
                return this.weatherService.getForecastWeather(cityName).pipe(
                  switchMap((data: Forecast) => {
                    return this.transformDataDetailsService.getDataDetails(
                      data
                    );
                  })
                );
              })
            );
        })
      )
      .pipe(
        catchError(() =>
          this.weatherService.getForecastWeather().pipe(
            switchMap((cw): any => {
              const cityName = cw.location.name;
              return this.weatherService.getForecastWeather(cityName).pipe(
                switchMap((data: Forecast) => {
                  return this.transformDataDetailsService.getDataDetails(data);
                })
              );
            })
          )
        )
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
