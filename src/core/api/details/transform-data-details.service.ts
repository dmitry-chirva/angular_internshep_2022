import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetailsWeather } from 'src/app/shared/interfaces/details-weather-data.interfaces';
import {
  ForecastData,
  Day,
} from 'src/app/shared/interfaces/forecast-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransformDataDetailsService {
  private TO_METERS_PER_SEC = 0.278;

  getDataDetails(data: ForecastData): Observable<ForecastData> {
    return new Observable((obs) => {
      data.forecast.forecastday[0].hour.forEach((day: Day) => {
        day.temp_c = Math.round(day.temp_c);
        day.feelslike_c = Math.round(day.feelslike_c);
        day.wind_kps = +(day.wind_kph * this.TO_METERS_PER_SEC).toFixed(1);
        day.gust_kps = +(day.gust_kph * this.TO_METERS_PER_SEC).toFixed(1);
      });
      obs.next(
        data.forecast.forecastday[0].hour.reduce(
          (acc: any, val: { [x: string]: any }) => {
            let key = Object.keys(val); // array of keys

            key.forEach((k) => {
              // writing values
              acc[k] = acc[k] ? [...acc[k], val[k]] : [val[k]];
            });
            return acc;
          },
          {}
        )
      );
      obs.complete();
      (error: unknown) => {
        obs.error(error);
      };
    });
  }

  transformDetailsWeather(data: DetailsWeather[] | any): DetailsWeather {
    return {
      temperature: data.temp_c,
      temperatureFeelsLike: data.feelslike_c,
      windSpeed: data.wind_kps,
      windSpeedFeelsLike: data.gust_kps,
      cloud: data.cloud,
      humidity: data.humidity,
      pressure: data.pressure_mb,
    };
  }
}
