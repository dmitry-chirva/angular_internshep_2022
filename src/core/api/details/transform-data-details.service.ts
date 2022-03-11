import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Forecast,
  ForecastData,
  Hour,
} from 'src/app/shared/interfaces/forecast-info.interfaces';

@Injectable({
  providedIn: 'root',
})
export class TransformDataDetailsService {
  private TO_METERS_PER_SEC = 0.278;

  constructor() {}

  getDataDetails(data: Forecast): Observable<ForecastData> {
    return new Observable((obs) => {
      obs.next(
        data.forecast.forecastday[0].hour.forEach((v: Hour) => {
          v.temp_c = Math.round(v.temp_c);
          v.feelslike_c = Math.round(v.feelslike_c);
          v.wind_kps = +(v.wind_kph * this.TO_METERS_PER_SEC).toFixed(1);
          v.gust_kps = +(v.gust_kph * this.TO_METERS_PER_SEC).toFixed(1);
        })
      );
      obs.next(
        data.forecast.forecastday[0].hour.reduce((acc: any, val: any) => {
          let key = Object.keys(val); // array of keys

          key.forEach((k) => {
            // writing values
            acc[k] = acc[k] ? [...acc[k], val[k]] : [val[k]];
          });
          return acc;
        }, {})
      );
      obs.complete();
      (error: any) => {
        obs.error(error);
      };
    });
  }
}
