import { Component, OnInit } from '@angular/core';

import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { ForecastService } from 'src/core/api/forecast/forecast.service';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  city: string;
  forecast: CityWeatherInfo[] = [];
  forecastBreadcrumbLinks: BreadcrumbLink[] = [];
  forecastDays: number;
  weatherInfo: CityWeatherInfo;

  forecastTypes : any = Object.freeze({
    ['three-days']: 3,
    ['ten-days']: 10,
    default: 1,
  });

  constructor(
    private activateRoute: ActivatedRoute,
    private forecastService: ForecastService
  ) {
    this.city = activateRoute.snapshot.params['city'];
    this.weatherInfo = {
      city: this.city,
      date: '',
      temp: '',
      isFavorite: false,
    };
    this.forecastDays = this.getForecastDays(
      activateRoute.snapshot.params['forecast']
    );

    this.forecastBreadcrumbLinks = [
      { link: '/', name: 'Home', isActive: false },
      { link: `/${this.city}/details`, name: 'Details', isActive: false },
      { link: `/${this.city}/details`, name: 'Forecast', isActive: true },
    ];
  }

  ngOnInit() {
    this.forecastService
      .getCurrentWeatherForecast(this.city, this.forecastDays)
      .subscribe((forecast) => (this.forecast = forecast));
  }

  getForecastDays(type: string): number {
    return this.forecastTypes[type] ? this.forecastTypes[type] : this.forecastTypes.default;
  }
}
