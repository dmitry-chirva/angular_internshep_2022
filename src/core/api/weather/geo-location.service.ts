import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeoLocationService {
  defLocation: any = {
    coords: {
      latitude: 50.45641,
      longitude: 30.40166,
    },
  };

  constructor() {}

  getPosition(): Observable<any> {
    return new Observable((obs) => {
      navigator.geolocation.getCurrentPosition(
        (success) => {
          obs.next(success);
          obs.complete();
        },
        (error) => {
          obs.next(this.defLocation);
          obs.complete();
        }
      );
    });
  }
}
