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
          this.detailsWeatherData.temp_c = [...temp_c];
          this.detailsWeatherData.feelslike_c = [...feelslike_c];
          this.detailsWeatherData.wind_kph = [...wind_kph];
          this.detailsWeatherData.gust_kph = [...gust_kph];
          this.detailsWeatherData.cloud = [...cloud];
          this.detailsWeatherData.humidity = [...humidity];
          this.detailsWeatherData.pressure_mb = [...pressure_mb];
        }
      );
  }
}
