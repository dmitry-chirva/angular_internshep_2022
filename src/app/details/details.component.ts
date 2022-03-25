import { FavoriteStateService } from 'src/core/favorites-state/favorite-state.service';
import { Component } from '@angular/core';
import {filter, map, switchMap, tap} from 'rxjs';

import { DetailsService } from 'src/core/api/details/details.service';
import { TransformDataDetailsService } from 'src/core/api/details/transform-data-details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { Column } from '../shared/interfaces/table.interfaces';
import { DetailsInfo } from '../shared/interfaces/details-info.interfaces';
import { HomeService } from 'src/core/api/home/home.service';
import { GeoLocationService } from 'src/core/api/weather/geo-location.service';
import { ForecastType } from '../shared/enums/forecast.enum';
import {WeatherService} from "../../core/api/weather/weather.service";
import {WeatherTransformService} from "../../core/api/common/weather-transform.service";
import {ForecastData} from "../shared/interfaces/forecast-info.interfaces";
import { Constants } from 'src/core/api/common/constants';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {

  weatherInfo: CityWeatherInfo = {
    city: '',
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

  isLoading : boolean = false;
  detailsState : ForecastType | null = null;
  detailsData: DetailsInfo[] = [];

  private currentCity: string = this.weatherInfo.city;
  detailBreadcrumbLinks: BreadcrumbLink[] = [];

  constructor(
    private homeService: HomeService,
    private geoLocationService: GeoLocationService,
    private activateRoute: ActivatedRoute,
    private detailsService: DetailsService,
    private transformDataDetailsService: TransformDataDetailsService,
    private favoriteStateService: FavoriteStateService,
    private router: Router,
    private weatherService: WeatherService,
    private weatherTransformService : WeatherTransformService,
  ) {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((value) => {
      this.isLoading = true;
      this.currentCity = activateRoute.snapshot.params['city'];
      this.detailBreadcrumbLinks = [
        { link: '/', name: 'Home', isActive: false },
        { link: `/${this.currentCity}/details`, name: 'Details', isActive: true },
      ];
      this.detailsState = activateRoute.snapshot.routeConfig?.path?.endsWith('tomorrow') ? ForecastType.Tomorrow : ForecastType.Today;

      const getWeatherDataObservable =
        this.detailsState === ForecastType.Today
          ? this.weatherService.getForecastWeather(this.currentCity).pipe(
            switchMap((currentLocation: ForecastData) => {
              const cityName = currentLocation.location.name;
              return this.weatherService.getForecastWeather(cityName).pipe(
                switchMap((data: ForecastData) => {
                  return this.transformDataDetailsService.getDataDetails(data, 0);
                })
              );
            })
          )
          : this.weatherService.getForecastWeather(this.currentCity).pipe(
            switchMap((currentLocation: ForecastData) => {
              const cityName = currentLocation.location.name;
              return this.weatherService.getForecastWeather(cityName).pipe(
                switchMap((data: ForecastData) => {
                  return this.transformDataDetailsService.getDataDetails(data, 1);
                })
              );
            })
          )

      getWeatherDataObservable
        .pipe(tap((data : any) => {
          this.detailsData = this.transformDataDetailsService.transformDetailsWeather(data)
        }))
        .subscribe();

      weatherService.getCurrentWeatherByCity(this.currentCity)
        .pipe(map((data) => this.weatherTransformService.toCurrentWeatherData(data)))
        .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
          this.weatherInfo.date = `${month} ${date}th, ${year}`;
          this.weatherInfo.temp = `${temp} °С`;
          this.weatherInfo.city = city;
          this.weatherInfo.isFavorite = !this.favoriteStateService.isFavoriteCity(this.currentCity)
          this.isLoading = false;
        });
    })
  }

  ngOnInit() {
    this.isLoading = true;

    this.weatherService.getCurrentWeatherByCity(this.currentCity)
      .pipe(map((data) => this.weatherTransformService.toCurrentWeatherData(data)))
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${temp} °С`;
        this.weatherInfo.city = city;
        this.weatherInfo.isFavorite = !this.favoriteStateService.isFavoriteCity(this.currentCity)
      });


    const getWeatherDataObservable =
      this.detailsState === ForecastType.Today
        ? this.weatherService.getForecastWeather(this.currentCity).pipe(
          switchMap((currentLocation: ForecastData) => {
            const cityName = currentLocation.location.name;
            return this.weatherService.getForecastWeather(cityName).pipe(
              switchMap((data: ForecastData) => {
                return this.transformDataDetailsService.getDataDetails(data, 0);
              })
            );
          })
        )
        : this.weatherService.getForecastWeather(this.currentCity).pipe(
          switchMap((currentLocation: ForecastData) => {
            const cityName = currentLocation.location.name;
            return this.weatherService.getForecastWeather(cityName).pipe(
              switchMap((data: ForecastData) => {
                return this.transformDataDetailsService.getDataDetails(data, 1);
              })
            );
          })
        )
    getWeatherDataObservable
      .pipe(tap((data : any) => {
        this.detailsData = this.transformDataDetailsService.transformDetailsWeather(data);
        this.isLoading = false;
      }))
      .subscribe();
  }
}
