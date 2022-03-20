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
  forecastBreadcrumbLinks: BreadcrumbLink[] = []
  forecastDays: number;
  weatherInfo: CityWeatherInfo;

  constructor(
    activateRoute: ActivatedRoute,
    private forecastService: ForecastService
  ) {
    const city = activateRoute.snapshot.params['city'];

    this.weatherInfo = { city: city, date: '', temp: '', isFavorite: false };
    this.forecastDays = this.getForecastDays(activateRoute.snapshot.params['forecast']);

    this.forecastBreadcrumbLinks = [
      { link: '/', name: 'Home', isActive: false },
      { link: `/${city}/details`, name: 'Details', isActive: false },
      { link: `/${city}/details`, name: 'Forecast', isActive: true },
    ];
  }

  ngOnInit() {
    this.forecastService
      .getCurrentWeatherForecast(this.weatherInfo.city, this.forecastDays)
      .subscribe(({ city }: CurrentWeatherData) => {
        this.weatherInfo.city = city;
      });
  }

  getForecastDays(forecastType : string): number {
    if (forecastType === 'three-days') {
      return 3;
    } else if (forecastType === 'ten-days') {
      return 10;
    }

    return 1;
  }

  forecast: CityWeatherInfo[] = [
    {
      city: 'Kiev, Ukraine',
      date: 'February 18th, 2022',
      minTemp: '0°',
      maxTemp: '3°',
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '3 km/h',
        humidity: '72%',
      },
    },
    {
      city: 'Kiev, Ukraine',
      date: 'February 18th, 2022',
      minTemp: '-3°',
      maxTemp: '4°',
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '5 km/h',
        humidity: '85%',
      },
    },
    {
      city: 'Kiev, Ukraine',
      date: 'February 7th, 2022',
      minTemp: '1°',
      maxTemp: '2°',
      weatherIcon: 'assets/images/weather.png',
      additionalInfo: {
        weatherLabel: 'Light snow',
        windSpeed: '10 km/h',
        humidity: '90%',
      },
    },
  ];
}
