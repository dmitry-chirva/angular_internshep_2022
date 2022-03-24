import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';

import { DetailsInfo } from 'src/app/shared/interfaces/details-info.interfaces';
import { ForecastData } from 'src/app/shared/interfaces/forecast-info.interfaces';
import { CurrentLocationWeather } from 'src/app/shared/interfaces/search-info.interfaces';
import { WeatherTransformService } from '../common/weather-transform.service';
import { CurrentWeatherData } from '../weather/current-weather.type';
import { GeoLocationService } from '../weather/geo-location.service';
import { WeatherService } from '../weather/weather.service';
import { TransformDataDetailsService } from './transform-data-details.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(
    private weatherTransformService: WeatherTransformService,
    private weatherService: WeatherService,
    private geolocationService: GeoLocationService,
    private transformDataDetailsService: TransformDataDetailsService
  ) {}

  getDataForTodayWeatherTable(city: string): Observable<DetailsInfo | unknown> {
    return this.getDataForWeatherTable(city, 0);
  }

  getDataForTomorrowWeatherTable(city: string): Observable<DetailsInfo | unknown> {
    return this.getDataForWeatherTable(city, 1);
  }

  getCurrentWeatherHome(
    geoLocation: Observable<GeolocationPosition>,
    fallbackCity : string
  ): Observable<CurrentWeatherData> {
    return geoLocation.pipe(
      switchMap((pos: { coords: { latitude: number; longitude: number } }) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        return this.weatherService
          .getCurrentWeatherByCoordinates(latitude, longitude)
          .pipe(
            map((data) =>
              this.weatherTransformService.toCurrentWeatherData(data)
            )
          );
      })
    )
    .pipe(
      catchError(() =>
        this.weatherService.getCurrentWeatherByCity(fallbackCity)
          .pipe(map((data) => this.weatherTransformService.toCurrentWeatherData(data))
    )));
  }

  private getDataForWeatherTable(city: string, index : number): Observable<DetailsInfo | unknown> {
    return this.geolocationService
      .getPosition()
      .pipe(
        switchMap(
          (pos: { coords: { latitude: number; longitude: number } }) => {
            const latitude = pos.coords.latitude;
            const longitude = pos.coords.longitude;
            return this.weatherService
              .getCurrentWeatherByCoordinates(latitude, longitude)
              .pipe(
                switchMap((currentLocation: CurrentLocationWeather) => {
                  const cityName = currentLocation.location.name;
                  return this.weatherService.getForecastWeather(cityName).pipe(
                    switchMap((data: ForecastData) => {
                      return this.transformDataDetailsService.getDataDetails(data, index);
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
            switchMap((currentLocation: ForecastData) => {
              const cityName = currentLocation.location.name;
              return this.weatherService.getForecastWeather(cityName).pipe(
                switchMap((data: ForecastData) => {
                  return this.transformDataDetailsService.getDataDetails(data, 1);
                })
              );
            })
          )
        )
      );
  }
}
