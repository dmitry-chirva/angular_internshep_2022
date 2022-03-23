import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/core/api/home/home.service';
import { CurrentWeatherData } from 'src/core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { GeoLocationService } from 'src/core/api/weather/geo-location.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherInfo: CityWeatherInfo = {
    city: 'Kiev, Ukraine',
    date: '',
    temp: '',
    isFavorite: false,
  };

  constructor(
    private homeService: HomeService,
    private geoLocationService : GeoLocationService) {}

  ngOnInit() {
    this.homeService
      .getCurrentWeatherHome(this.geoLocationService.getPosition())
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${temp} °С`;
        this.weatherInfo.city = city;
      });
  }
}
