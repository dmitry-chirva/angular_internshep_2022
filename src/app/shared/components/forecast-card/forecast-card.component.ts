import { WeatherService } from 'src/core/api/weather/weather.service';
import {Component, Input, OnInit} from '@angular/core';
import {CityWeatherInfo} from "../../interfaces/city-weather-info.interfaces";

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {

  @Input() day: CityWeatherInfo = {
    city: '',
    date: '',
    temp: '',
    isFavorite: false,
    weatherIcon: '',
    additionalInfo: {
      weatherLabel: '',
      windSpeed: '',
      humidity: '',
    },
  }

  constructor() { }

  ngOnInit(): void {
  }

}
