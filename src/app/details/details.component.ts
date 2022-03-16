import { Component } from '@angular/core';

import { DetailsService } from 'src/core/api/details/details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
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
}
