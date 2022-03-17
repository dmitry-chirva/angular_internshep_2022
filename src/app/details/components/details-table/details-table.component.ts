import { Component, Input } from '@angular/core';
import { DetailsWeather } from 'src/app/shared/interfaces/details-weather-data.interfaces';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss'],
})
export class DetailsTableComponent {
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
