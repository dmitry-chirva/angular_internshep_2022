import { Component, OnInit, Input } from '@angular/core';
import {ICityWeatherInfo} from "../../interfaces/city-weather-info.interfaces";
import {ICityWeatherAdditionalInfo} from "../../interfaces/city-weather-additional-info.interfaces";

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {

  @Input() state: ICityWeatherInfo = {
    city: 'undefined',
    date: 'undefined',
    temp: 'undefined',
    weatherIcon: 'undefined',
    additionalInfo: {
      weatherLabel: 'undefined',
      windSpeed: 'undefined',
      humidity: 'undefined',
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
