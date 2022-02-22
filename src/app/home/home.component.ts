import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { WeatherService } from 'src/core/api/weather/weather.service';
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

  position: any = {};

  constructor(private weatherServise: WeatherService) {}

  async ngOnInit() {
    if (navigator.geolocation) {
      this.position = await this.weatherServise.getCoords();
      this.weatherServise
        .getCurrentLocation(this.position)
        .pipe(
          switchMap((res) => this.weatherServise.getWeather(res.location.name))
        )
        .subscribe((response) => {
          // console.log(response);
          const year = response.location.localtime
            .split('')
            .slice(0, 4)
            .join('');
          const date = response.location.localtime
            .split('')
            .slice(8, 10)
            .join('');
          const month = new Date().toLocaleString('en', { month: 'long' });

          this.weatherInfo.date = `${month} ${date}th, ${year}`;
          this.weatherInfo.temp = `${Math.floor(response.current.temp_c)} °С`;
          this.weatherInfo.city = `${response.location.name}, ${response.location.country}`;
        });
      // console.log(this.position);
    } else alert('Geolocation is not supported!');
  }
}
