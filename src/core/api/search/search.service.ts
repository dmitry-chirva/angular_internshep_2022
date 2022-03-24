import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ForecastData} from "../../../app/shared/interfaces/forecast-info.interfaces";
import {map, Observable} from "rxjs";
import {Search} from "../../../app/shared/interfaces/search.interface";
import {CitySearch} from "../../../app/shared/interfaces/city-search.interface";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  readonly BASE_URL = 'https://api.weatherapi.com/v1/';
  readonly API_KEY = 'b88614b3fb684e8b996104153220302';

  constructor(private http: HttpClient) {}

  getSearchList (city: string): Observable<CitySearch[]> {
    return this.http.get<Search[]>(
      `${this.BASE_URL}search.json?key=${this.API_KEY}&q=${city}`
    )
  }
}
