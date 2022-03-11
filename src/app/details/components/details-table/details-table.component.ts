import { Component, Input, OnInit } from '@angular/core';
import { DataDetailsWeather } from 'src/app/shared/interfaces/details-weather-data.interfaces';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
})
export class DetailsTableComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() dataDetails: DataDetailsWeather = {
    celsiusTemperature: [],
    celsiusTemperatureFeelslike: [],
    windSpeed: [],
    windSpeedFeelslike: [],
    cloud: [],
    humidity: [],
    pressure: [],
  };
}
