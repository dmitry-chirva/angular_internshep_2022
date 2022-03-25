import { Component, OnInit } from '@angular/core';

import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { ForecastService } from 'src/core/api/forecast/forecast.service';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';
import { forecastTypes } from './forecast-types.constant';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  city: string;
  forecast: CityWeatherInfo[] = [];
  forecastHistory: CityWeatherInfo[] = [];
  forecastBreadcrumbLinks: BreadcrumbLink[] = [];
  forecastDays: number;
  weatherInfo: CityWeatherInfo;
  isForecastHistoryEnabled: boolean=true;
  isLoading : boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private forecastService: ForecastService
  ) {
    this.city = activateRoute.snapshot.params['city'];

    this.weatherInfo = {
      city: this.city,
      date: '',
      temp: ''
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
    this.isLoading = true;

    this.forecastService
      .getCurrentWeatherForecast(this.city, this.forecastDays)
      .subscribe((forecast) => {
        this.forecast = forecast;
        this.isLoading = false;
      });
  }

  openForecastHistory() {
    if (this.forecastHistory.length > 0) {
      return;
    }

    const periodDays = 7;

    this.isLoading = true;

    this.forecastService.getHistoryWeatherForecast(this.city, this.getDatesRange(periodDays))
      .subscribe(forecastHistory => {
        this.forecastHistory = forecastHistory;
        this.isForecastHistoryEnabled = false;
        this.isLoading = false;
      });
  }

  getForecastDays(type: string): number {
    return forecastTypes[type] ? forecastTypes[type] : forecastTypes.default;
  }

  private getDatesRange(periodDays : number) {

    return Array.from(Array(periodDays).keys())
      .map((_, days) => {
        const now = new Date();
        now.setDate(now.getDate() - days - 1);
        return now;
      });
  }
}
