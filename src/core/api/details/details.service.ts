import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';
import { DetailsInfo } from 'src/app/shared/interfaces/details-info.interfaces';
import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';
import { CurrentWeatherData } from '../weather/current-weather.type';

import { GeoLocationService } from '../weather/geo-location.service';
import { WeatherService } from '../weather/weather.service';
import { TransformDataDetailsService } from './transform-data-details.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  weatherTransformService: any;
  constructor(
    private weatherService: WeatherService,
    private geolocationService: GeoLocationService,
    private transformDataDetailsService: TransformDataDetailsService
  ) {}

  getDataForWeatherTable(city: string): Observable<DetailsInfo | unknown> {
    return this.geolocationService
      .getPosition()
      .pipe(
        switchMap(
          (pos: { coords: { latitude: number; longitude: number } }) => {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            return this.weatherService
              .getCurrentWeather(latitude, longitude)
              .pipe(
                switchMap((cw: CurrentLocationWeather) => {
                  const cityName = cw.location.name;
                  return this.weatherService.getForecastWeather(cityName).pipe(
                    switchMap((data: ForecastData) => {
                      return this.transformDataDetailsService.getDataDetails(
                        data
                      );
                    })
                  );
                })
              );
          }
        )
      )
      .pipe(
        catchError(() =>
          this.weatherService.getForecastWeather(city).pipe(
            switchMap((cw: ForecastData) => {
              const cityName = cw.location.name;
              return this.weatherService.getForecastWeather(cityName).pipe(
                switchMap((data: ForecastData) => {
                  return this.transformDataDetailsService.getDataDetails(data);
                })
              );
            })
          )
        )
      );
  }

  getCurrentWeatherHome(
    geoLocation: Observable<GeolocationPosition>
  ): Observable<CurrentWeatherData> {
    return geoLocation.pipe(
      switchMap((pos: { coords: { latitude: number; longitude: number } }) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        return this.weatherService
          .getCurrentWeather(latitude, longitude)
          .pipe(
            map((data) =>
              this.weatherTransformService.toCurrentWeatherData(data)
            )
          );
      })
    );
  }
}
