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
    temp_c: [],
    feelslike_c: [],
    wind_kph: [],
    gust_kph: [],
    cloud: [],
    humidity: [],
    pressure_mb: [],
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
      .subscribe(
        ({
          temp_c,
          feelslike_c,
          wind_kph,
          gust_kph,
          cloud,
          humidity,
          pressure_mb,
        }: DataDetailsWeather) => {
          this.detailsWeatherData.temp_c = [
            Math.round(temp_c[0]),
            Math.round(temp_c[6]),
            Math.round(temp_c[12]),
            Math.round(temp_c[18]),
          ];
          this.detailsWeatherData.feelslike_c = [
            Math.round(feelslike_c[0]),
            Math.round(feelslike_c[6]),
            Math.round(feelslike_c[12]),
            Math.round(feelslike_c[18]),
          ];
          this.detailsWeatherData.wind_kph = [
            +(wind_kph[0] * 0.277).toFixed(1),
            +(wind_kph[6] * 0.277).toFixed(1),
            +(wind_kph[12] * 0.277).toFixed(1),
            +(wind_kph[18] * 0.277).toFixed(1),
          ];
          this.detailsWeatherData.gust_kph = [
            +(gust_kph[0] * 0.277).toFixed(1),
            +(gust_kph[6] * 0.277).toFixed(1),
            +(gust_kph[12] * 0.277).toFixed(1),
            +(gust_kph[18] * 0.277).toFixed(1),
          ];
          this.detailsWeatherData.cloud = [
            cloud[0],
            cloud[6],
            cloud[12],
            cloud[18],
          ];
          this.detailsWeatherData.humidity = [
            humidity[0],
            humidity[6],
            humidity[12],
            humidity[18],
          ];
          this.detailsWeatherData.pressure_mb = [
            pressure_mb[0],
            pressure_mb[6],
            pressure_mb[12],
            pressure_mb[18],
          ];
        }
      );
  }
}
