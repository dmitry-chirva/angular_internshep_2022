import { Component, Input } from '@angular/core';
import { DetailsWeather } from '../../interfaces/details-weather-data.interfaces';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() dataDetails: DetailsWeather = {
    temperature: [],
    temperatureFeelsLike: [],
    windSpeed: [],
    windSpeedFeelsLike: [],
    cloud: [],
    humidity: [],
    pressure: [],
  };
}
