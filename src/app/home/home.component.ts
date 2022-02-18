import { Component } from '@angular/core';
import { CityWeatherInfo } from "../shared/interfaces/city-weather-info.interfaces";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  weatherInfo: CityWeatherInfo = {
    city: 'Kyiv, Ukraine',
    date: 'February 7th, 2022',
    temp: '7 °С',
    isFavorite: false
  }
}
