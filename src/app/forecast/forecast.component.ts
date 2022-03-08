import { Component, OnInit } from '@angular/core';

import { ForecastInfo } from '../shared/interfaces/forecast-info.interfaces';
import { ICityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { ForecastService } from 'src/core/api/forecast/forecast.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  weatherInfo: ICityWeatherInfo = {
    city: 'Kiev, Ukraine',
    date: '',
    temp: '',
    isFavorite: false,
  };

  constructor(private forecastService: ForecastService) {}

  ngOnInit() {
    this.forecastService
      .getCurrentWeatherForecast()
      .subscribe(({ city }: CurrentWeatherData) => {
        this.weatherInfo.city = city;
      });
  }

  forecast: ICityWeatherInfo[] = [
    {
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
