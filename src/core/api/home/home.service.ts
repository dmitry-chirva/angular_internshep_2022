import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs';

import { GeoLocationService } from '../weather/geo-location.service';
import { WeatherService } from '../weather/weather.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private weatherService: WeatherService,
    private geolocationService: GeoLocationService
  ) {}

  getCurrentWeatherHome(): any {
    if (navigator.geolocation) {
      return this.geolocationService.getPosition().pipe(
        switchMap((pos) => {
          // console.log('Location:', pos);
          return this.weatherService.getCurrentWeather(pos);
        })
      );
    } else alert('Geolocation is not supported!');
  }
}
