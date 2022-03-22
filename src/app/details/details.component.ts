import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { DetailsService } from 'src/core/api/details/details.service';
import { TransformDataDetailsService } from 'src/core/api/details/transform-data-details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';
import { ActivatedRoute } from '@angular/router';
import { Column } from '../shared/interfaces/table.interfaces';
import { DetailsInfo } from '../shared/interfaces/details-info.interfaces';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
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

  private currentCity: string;
  weatherInfo: CityWeatherInfo | null = null;
  detailBreadcrumbLinks: BreadcrumbLink[] = [];

  constructor(
    private activateRoute: ActivatedRoute,
    private detailsService: DetailsService,
    private transformDataDetailsService: TransformDataDetailsService
  ) {
    this.currentCity = activateRoute.snapshot.params['city'];
    this.weatherInfo = {
      city: this.currentCity,
      date: '',
      temp: '',
      isFavorite: false,
    };
    this.detailBreadcrumbLinks = [
      { link: '/', name: 'Home', isActive: false },
      { link: `/${this.currentCity}/details`, name: 'Details', isActive: true },
    ];
  }

  ngOnInit() {
    this.detailsService
      .getCurrentWeatherDetails(this.currentCity)
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo = {
          city: city,
          date: `${month} ${date}th, ${year}`,
          temp: `${temp} °С`,
        };
      });

    this.detailsService
      .getDataForWeatherTable(this.currentCity)
      .pipe(
        tap(
          (data: any) =>
            (this.detailsData =
              this.transformDataDetailsService.transformDetailsWeather(data))
        )
      )
      .subscribe();
  }
}
