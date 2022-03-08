import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/core/api/home/home.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { ICityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weatherInfo: ICityWeatherInfo = {
    city: 'Kiev, Ukraine',
    date: '',
    temp: '',
    isFavorite: false,
  };

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService
      .getCurrentWeatherHome()
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${temp} °С`;
        this.weatherInfo.city = city;
      });
  }
}
