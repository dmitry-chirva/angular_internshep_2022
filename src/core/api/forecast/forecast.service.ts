import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';

import { GeoLocationService } from '../weather/geo-location.service';
import { WeatherService } from '../weather/weather.service';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(
    private weatherService: WeatherService,
    private geolocationService: GeoLocationService
  ) {}

  getCurrentWeatherForecast(): any {
    if (navigator.geolocation) {
      return this.geolocationService.getPosition().pipe(
        switchMap((pos) => {
          return this.weatherService.getCurrentWeather(pos);
        })
      );
    } else alert('Geolocation is not supported!');
  }
}
