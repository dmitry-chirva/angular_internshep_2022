import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsInfo } from 'src/app/shared/interfaces/details-info.interfaces';
import {
  ForecastData,
  CurrentWeather,
} from 'src/app/shared/interfaces/forecast-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransformDataDetailsService {
  private TO_METERS_PER_SEC = 0.278;
  private DATA_OUTPUT_CLOCK = ['12PM', '6AM', '12AM', '6PM'];

  getDataDetails(data: ForecastData, index : number): Observable<CurrentWeather[]> {
    return new Observable((obs) => {
      data.forecast.forecastday[index].hour.forEach((day: CurrentWeather) => {
        day.temp_c = Math.round(day.temp_c);
        day.feelslike_c = Math.round(day.feelslike_c);
        day.wind_kps = +(day.wind_kph * this.TO_METERS_PER_SEC).toFixed(1);
        day.gust_kps = +(day.gust_kph * this.TO_METERS_PER_SEC).toFixed(1);
      });
      obs.next(data.forecast.forecastday[index].hour);
      obs.complete();
      (error: unknown) => {
        obs.error(error);
      };
    });
  }

  transformDetailsWeather(data: CurrentWeather[]): DetailsInfo[] {
    return data
      .filter((_d, i) => i === 0 || i === 6 || i === 12 || i === 18)
      .map((d, i) => ({
        hour: this.DATA_OUTPUT_CLOCK[i],
        temperature: d.temp_c,
        temperatureFeelsLike: d.feelslike_c,
        windSpeed: d.wind_kps,
        windSpeedFeelsLike: d.gust_kps,
        cloud: d.cloud,
        humidity: d.humidity,
        pressure: d.pressure_mb,
      }));
  }
}
