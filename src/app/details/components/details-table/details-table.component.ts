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
    temp_c: [],
    feelslike_c: [],
    wind_kph: [],
    gust_kph: [],
    cloud: [],
    humidity: [],
    pressure_mb: [],
  };
}
