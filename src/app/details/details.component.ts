import { Component } from '@angular/core';

import { DetailsService } from 'src/core/api/details/details.service';
import { CurrentWeatherData } from 'src/core/api/weather/types-weather';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';

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

  constructor(private detailsService: DetailsService) {}

  ngOnInit() {
    this.detailsService
      .getCurrentWeatherDetails()
      .subscribe((response: CurrentWeatherData) => {
        const year = response.location.localtime.split('').slice(0, 4).join('');
        const date = response.location.localtime
          .split('')
          .slice(8, 10)
          .join('');
        const month = new Date().toLocaleString('en', { month: 'long' });

        this.weatherInfo.date = `${month} ${date}th, ${year}`;
        this.weatherInfo.temp = `${Math.floor(response.current.temp_c)} °С`;
        this.weatherInfo.city = `${response.location.name}, ${response.location.country}`;
      });
  }
}
