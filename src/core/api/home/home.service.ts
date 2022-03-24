import { Injectable } from '@angular/core';
import { catchError, map, Observable, switchMap } from 'rxjs';
import { CurrentWeatherData } from '../weather/current-weather.type';
import { WeatherService } from '../weather/weather.service';
import { WeatherTransformService } from '../common/weather-transform.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private weatherTransformService : WeatherTransformService,
    private weatherService: WeatherService) { }

  getCurrentWeatherHome(
    geoLocation: Observable<GeolocationPosition>,
    fallbackCity: string
  ): Observable<CurrentWeatherData> {
    return geoLocation.pipe(
      switchMap((pos) => {
        const latitude = pos.coords.latitude;
        const longitude = pos.coords.longitude;
        return this.weatherService.getCurrentWeatherByCoordinates(latitude, longitude)
          .pipe(map(data => this.weatherTransformService.toCurrentWeatherData(data)));
      })
    )
    .pipe(
      catchError(() =>
        this.weatherService.getCurrentWeatherByCity(fallbackCity)
          .pipe(map((data) => this.weatherTransformService.toCurrentWeatherData(data))
    )));
  }
}
