import { Component, OnInit } from '@angular/core';

import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { ForecastService } from 'src/core/api/forecast/forecast.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
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
  forecastBreadcrumbLinks: BreadcrumbLink[] = []
  forecastDays: number;
  weatherInfo: CityWeatherInfo;

  constructor(
    activateRoute: ActivatedRoute,
    private forecastService: ForecastService
  ) {
    this.city = activateRoute.snapshot.params['city'];
    this.weatherInfo = { city: this.city, date: '', temp: '', isFavorite: false };
    this.forecastDays = this.getForecastDays(activateRoute.snapshot.params['forecast']);

    this.forecastBreadcrumbLinks = [
      { link: '/', name: 'Home', isActive: false },
      { link: `/${this.city}/details`, name: 'Details', isActive: false },
      { link: `/${this.city}/details`, name: 'Forecast', isActive: true },
    ];
  }

  ngOnInit() {
    this.forecastService
      .getCurrentWeatherForecast(this.city, this.forecastDays)
      .subscribe(forecast => this.forecast = forecast);
  }

  getForecastDays(forecastType : string): number {
    if (forecastType === 'three-days') {
      return 3;
    } else if (forecastType === 'ten-days') {
      return 10;
    }

    return 1;
  }
}
