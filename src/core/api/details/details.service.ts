import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';

import { GeoLocationService } from '../weather/geo-location.service';
import { WeatherService } from '../weather/weather.service';

@Injectable({
  providedIn: 'root',
})
export class DetailsService {
  constructor(
    private weatherService: WeatherService,
    private geolocationServise: GeoLocationService
  ) {}

  getCurrentWeatherDetails(): any {
    if (navigator.geolocation) {
      return this.geolocationServise.getPosition().pipe(
        switchMap((pos) => {
          return this.weatherService.getCurrentWeather(pos);
        })
      );
    } else alert('Geolocation is not supported!');
  }
}
