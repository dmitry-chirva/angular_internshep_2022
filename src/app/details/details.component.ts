import { Component } from '@angular/core';
import { tap } from 'rxjs';

import { DetailsService } from 'src/core/api/details/details.service';
import { TransformDataDetailsService } from 'src/core/api/details/transform-data-details.service';
import { CurrentWeatherData } from '../../core/api/weather/current-weather.type';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { DetailsWeather } from '../shared/interfaces/details-weather-data.interfaces';
import { BreadcrumbLink } from '../shared/interfaces/breadcrumbs-links.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  detailsWeatherData: DetailsWeather = {
    temperature: [],
    temperatureFeelsLike: [],
    windSpeed: [],
    windSpeedFeelsLike: [],
    cloud: [],
    humidity: [],
    pressure: [],
  };
  city : string;
  weatherInfo: CityWeatherInfo | null = null;
  detailBreadcrumbLinks: BreadcrumbLink[] = [];

  constructor(
    activateRoute : ActivatedRoute,
    private detailsService: DetailsService,
    private transformDataDetailsService: TransformDataDetailsService
  ) {
    this.city = activateRoute.snapshot.params['city'];
    this.weatherInfo = { city: this.city, date: '', temp: '', isFavorite: false };
    this.detailBreadcrumbLinks =  [
      { link: '/', name: 'Home', isActive: false },
      { link: `/${this.city}/details`, name: 'Details', isActive: true },
    ];
  }

  ngOnInit() {
    this.detailsService
      .getCurrentWeatherDetails(this.city)
      .subscribe(({ year, date, month, temp, city }: CurrentWeatherData) => {
        this.weatherInfo = {
          city: city,
          date: `${month} ${date}th, ${year}`,
          temp: `${temp} °С`}
        });

    this.detailsService
      .getDataForWeatherTable(this.city)
      .pipe(
        tap(
          (data) =>
            (this.detailsWeatherData =
              this.transformDataDetailsService.transformDetailsWeather(data))
        )
      )
      .subscribe();
  }
}
