import { Component, OnInit } from '@angular/core';

import { ForecastInfo } from '../shared/interfaces/forecast-info.interfaces';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { WeatherService } from 'src/core/api/weather/weather.service';

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

  constructor(private weatherServise: WeatherService) {}

  ngOnInit() {
    this.weatherServise.getWeather().subscribe((res) => {
      const year = res.location.localtime.split('').slice(0, 4).join('');
      const date = res.location.localtime.split('').slice(8, 10).join('');
      const month = new Date().toLocaleString('en', { month: 'long' });

      this.weatherInfo.date = `${month} ${date}th, ${year}`;
      this.weatherInfo.temp = `${res.current.temp_c} °С`;
      this.weatherInfo.city = `${res.location.name}, ${res.location.country}`;
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
