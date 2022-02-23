import { Component, OnInit } from '@angular/core';

import { ForecastInfo } from '../shared/interfaces/forecast-info.interfaces';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { ForecastService } from 'src/core/api/forecast/forecast.service';
import { CurrentWeatherData } from 'src/core/api/weather/types-weather';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  weatherInfo: CityWeatherInfo = {
    city: 'Kiev, Ukraine',
    date: '',
    temp: '',
    isFavorite: false,
  };

  position: any = {};

  constructor(private forecastService: ForecastService) {}

  async ngOnInit() {
    this.forecastService
      .getCurrentWeatherForecast()
      .subscribe((response: CurrentWeatherData) => {
        this.weatherInfo.city = `${response.location.name}, ${response.location.country}`;
      });
  }

  forecast: ForecastInfo[] = [
    {
      date: 'Feb 7th, 2022',
      weatherIcon: 'string',
      minTemp: '0 °С',
      maxTemp: '4 °С',
      weatherLabel: 'Light snow',
      wind: '2 km/h',
      humidity: '70%',
    },
    {
      date: 'Feb 7th, 2022',
      weatherIcon: 'string',
      minTemp: '0 °С',
      maxTemp: '4 °С',
      weatherLabel: 'Light snow',
      wind: '2 km/h',
      humidity: '70%',
    },
    {
      date: 'Feb 7th, 2022',
      weatherIcon: 'string',
      minTemp: '0 °С',
      maxTemp: '4 °С',
      weatherLabel: 'Light snow',
      wind: '2 km/h',
      humidity: '70%',
    },
  ];
}
