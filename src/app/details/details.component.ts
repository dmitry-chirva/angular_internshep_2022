import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { DetailsService } from 'src/core/api/details/details.service';
import { TransformDataDetailsService } from 'src/core/api/details/transform-data-details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';
import {ActivatedRoute} from '@angular/router';
import { Column } from '../shared/interfaces/table.interfaces';
import { DetailsInfo } from '../shared/interfaces/details-info.interfaces';
import { HomeService } from 'src/core/api/home/home.service';
import { GeoLocationService } from 'src/core/api/weather/geo-location.service';
import { ForecastType } from '../shared/enums/forecast.enum';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  weatherInfo: CityWeatherInfo ;

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

  detailsState : ForecastType | null = null;
  detailsData: DetailsInfo[] | null = [];

  private currentCity: string;
  detailBreadcrumbLinks: BreadcrumbLink[] = [];

  constructor(
    private homeService: HomeService,
    private geoLocationService: GeoLocationService,
    private activateRoute: ActivatedRoute,
    private detailsService: DetailsService,
    private transformDataDetailsService: TransformDataDetailsService,
    private favoriteStateService: FavoriteStateService,
  ) {
    this.currentCity = activateRoute.snapshot.params['city'];
    this.detailsState = activateRoute.snapshot.routeConfig?.path?.endsWith('tomorrow') ? ForecastType.Tomorrow : ForecastType.Today;
    this.weatherInfo = {
      city: this.currentCity,
      date: '',
      temp: '',
      isFavorite: !this.favoriteStateService.isFavoriteCity(this.currentCity),
    };
    this.detailBreadcrumbLinks = [
      { link: '/', name: 'Home', isActive: false },
      { link: `/${this.currentCity}/details`, name: 'Details', isActive: true },
    ];
  }

  ngOnInit() {
    this.homeService
      .getCurrentWeatherHome(this.geoLocationService.getPosition())
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${temp} °С`;
        this.weatherInfo.city = city;
      });

    const getWeatherDataObservable =
      this.detailsState === ForecastType.Today
      ? this.detailsService.getDataForTodayWeatherTable(this.currentCity)
      : this.detailsService.getDataForTomorrowWeatherTable(this.currentCity);

    getWeatherDataObservable
      .pipe(tap((data : any) => this.detailsData = this.transformDataDetailsService.transformDetailsWeather(data)))
      .subscribe();
  }
}
