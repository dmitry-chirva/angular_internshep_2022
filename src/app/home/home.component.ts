import { Component, OnInit } from '@angular/core';

import { HomeService } from 'src/core/api/home/home.service';
import { CurrentWeatherData } from 'src/core/api/weather/types-weather';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';

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

  constructor(private homeService: HomeService) {}

  ngOnInit() {
    this.homeService
      .getCurrentWeatherHome()
      .subscribe((response: CurrentWeatherData) => {
        // console.log('Current', response);
        const year = response.location.localtime.split('').slice(0, 4).join('');
        const date = response.location.localtime
          .split('')
          .slice(8, 10)
          .join('');
        const month = new Date().toLocaleString('en', { month: 'long' });

        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${Math.floor(response.current.temp_c)} °С`;
        this.weatherInfo.city = `${response.location.name}, ${response.location.country}`;
      });
  }
}
