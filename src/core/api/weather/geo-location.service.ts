import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoLocationService {
  constructor() {}

  getPosition(): Observable<GeolocationPosition> {
    return new Observable((obs) => {
      navigator.geolocation.getCurrentPosition(
        (success) => {
          obs.next(success);
          obs.complete();
        },
        (error) => {
          obs.error(error);
        }
      );
    });
  }
}
