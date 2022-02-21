import { Component, OnInit } from '@angular/core';
import { DetailsInfo } from 'src/app/shared/interfaces/details-info.interfaces';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.scss']
})
export class DetailsTableComponent {

 details: DetailsInfo[] = [
    {
      hour: '12AM',
      temperature: -1,
      feelslike_c: -5,
      wind_kph: 4,
      gust_kph: 5,
      cloud: 80,
      humidity: 92,
      pressure_mb: 735  
    },
    {
      hour: '6AM',
      temperature: -1,
      feelslike_c: -5,
      wind_kph: 4,
      gust_kph: 5,
      cloud: 80,
      humidity: 92,
      pressure_mb: 735  
    },
    {
      hour: '12AM',
      temperature: -1,
      feelslike_c: -5,
      wind_kph: 4,
      gust_kph: 5,
      cloud: 80,
      humidity: 92,
      pressure_mb: 735  
    },
    {
      hour: '12AM',
      temperature: -1,
      feelslike_c: -5,
      wind_kph: 4,
      gust_kph: 5,
      cloud: 80,
      humidity: 92,
      pressure_mb: 735  
    },
  ]
}
