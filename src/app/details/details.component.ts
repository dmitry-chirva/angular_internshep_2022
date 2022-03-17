import { Component } from '@angular/core';

import { DetailsService } from 'src/core/api/details/details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { DetailsInfo } from '../shared/interfaces/details-info.interfaces';
import { Column } from '../shared/interfaces/table.interfaces';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';

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

  detailBreadcrumbLinks: BreadcrumbLink[] = [
    { link : '/', name : 'Home', isActive : false },
    { link: '/kiev/details', name: 'Details', isActive: true }
  ];

  constructor(private detailsService: DetailsService) {}

  ngOnInit() {
    this.detailsService
      .getCurrentWeatherDetails()
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${temp} °С`;
        this.weatherInfo.city = city;
      });
  }

  detailsColumns: Column[] = [
    { name: 'hour', displayName: '' },
    { name: 'temperature', displayName: 'Temperature, °C' },
    { name: 'feelslike_c', displayName: 'Feels like, °C' },
    { name: 'wind_kph', displayName: 'Wind speed, m/s' },
    { name: 'gust_kph', displayName: 'Wind gust, m/s' },
    { name: 'cloud', displayName: 'Cloud cover, %' },
    { name: 'humidity', displayName: 'Humidity, %' },
    { name: 'pressure_mb', displayName: 'Pressure, mb' }
  ]

  detailsData: DetailsInfo[] = [
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
      hour: '12PM',
      temperature: -1,
      feelslike_c: -5,
      wind_kph: 4,
      gust_kph: 5,
      cloud: 80,
      humidity: 92,
      pressure_mb: 735
    },
    {
      hour: '6PM',
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
