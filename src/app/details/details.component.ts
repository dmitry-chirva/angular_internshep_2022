import { Component } from '@angular/core';

import { WeatherService } from 'src/core/api/weather/weather.service';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';

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
}
