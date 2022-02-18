import { Component, OnInit } from '@angular/core';

import { ForecastInfo } from '../shared/interfaces/forecast-info.interfaces';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  constructor() { }
  weatherInfo: CityWeatherInfo = {
    city: 'Kyiv, Ukraine',
    date: 'February 7th, 2022',
    temp: '7 °С',
    isFavorite: false
  }

  forecast: ForecastInfo[] = [
    {
      date: "Feb 7th, 2022",
      weatherIcon: "string",
      minTemp: "0 °С",
      maxTemp: "4 °С",
      weatherLabel: "Light snow",
      wind: "2 km/h",
      humidity: "70%"
    },
    {
      date: "Feb 7th, 2022",
      weatherIcon: "string",
      minTemp: "0 °С",
      maxTemp: "4 °С",
      weatherLabel: "Light snow",
      wind: "2 km/h",
      humidity: "70%"
    },
    {
      date: "Feb 7th, 2022",
      weatherIcon: "string",
      minTemp: "0 °С",
      maxTemp: "4 °С",
      weatherLabel: "Light snow",
      wind: "2 km/h",
      humidity: "70%"
    }
  ]

  ngOnInit(): void {}
}
