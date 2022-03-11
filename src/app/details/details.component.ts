import { Component } from '@angular/core';

import { DetailsService } from 'src/core/api/details/details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { DataDetailsWeather } from '../shared/interfaces/details-weather-data.interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  weatherInfo: CityWeatherInfo = {
    city: 'Kiev, Ukraine',
    date: '',
    temp: '',
    isFavorite: false,
  };

  detailsWeatherData: DataDetailsWeather = {
    celsiusTemperature: [],
    celsiusTemperatureFeelslike: [],
    windSpeed: [],
    windSpeedFeelslike: [],
    cloud: [],
    humidity: [],
    pressure: [],
  };

  constructor(private detailsService: DetailsService) {}

  ngOnInit() {
    this.detailsService
      .getCurrentWeatherDetails()
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${temp} °С`;
        this.weatherInfo.city = city;
      });

    this.detailsService
      .getDataForWeatherTable()
      .subscribe((data: DataDetailsWeather[] | any) => {
        if (!data) {
          return;
        }

        this.detailsWeatherData.celsiusTemperature = data.temp_c;
        this.detailsWeatherData.celsiusTemperatureFeelslike = data.feelslike_c;
        this.detailsWeatherData.windSpeed = data.wind_kps;
        this.detailsWeatherData.windSpeedFeelslike = data.gust_kps;
        this.detailsWeatherData.cloud = data.cloud;
        this.detailsWeatherData.humidity = data.humidity;
        this.detailsWeatherData.pressure = data.pressure_mb;
      });
  }
}
