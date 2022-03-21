import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { DetailsService } from 'src/core/api/details/details.service';
import { TransformDataDetailsService } from 'src/core/api/details/transform-data-details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';
import { Column } from '../shared/interfaces/table.interfaces';
import { DetailsInfo } from '../shared/interfaces/details-info.interfaces';

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

  detailsColumns: Column[] = [
    { name: 'hour', displayName: '' },
    { name: 'temperature', displayName: 'Temperature, °C' },
    { name: 'temperatureFeelsLike', displayName: 'Feels like, °C' },
    { name: 'windSpeed', displayName: 'Wind speed, m/s' },
    { name: 'windSpeedFeelsLike', displayName: 'Wind gust, m/s' },
    { name: 'cloud', displayName: 'Cloud cover, %' },
    { name: 'humidity', displayName: 'Humidity, %' },
    { name: 'pressure', displayName: 'Pressure, mb' },
  ];

  detailsData: DetailsInfo[] | null = [];

  constructor(
    private detailsService: DetailsService,
    private transformDataDetailsService: TransformDataDetailsService
  ) {}

  detailBreadcrumbLinks: BreadcrumbLink[] = [
    { link: '/', name: 'Home', isActive: false },
    { link: '/kiev/details', name: 'Details', isActive: true },
  ];

  ngOnInit() {
    this.detailsService
      .getCurrentWeatherDetails()
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${temp} °С`;
        this.weatherInfo.city = city;
      });

    this.detailsService
      .getDataForWeatherTable()
      .pipe(
        tap((data) => {
          return (this.detailsData =
            this.transformDataDetailsService.transformDetailsWeather(data));
        })
      )
      .subscribe();
  }
}
