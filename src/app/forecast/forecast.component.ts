import { Component, OnInit } from '@angular/core';

import { ForecastInfo } from '../shared/interfaces/forecast-info.interfaces';
import { CityWeatherInfo } from '../shared/interfaces/city-weather-info.interfaces';
import { WeatherService } from 'src/core/api/weather/weather.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  weatherInfo: CityWeatherInfo = {
    city: 'Kiev, Ukraine',
    date: '',
    temp: '',
    isFavorite: false,
  };

  position: any = {};

  constructor(private weatherServise: WeatherService) {}

  async ngOnInit() {
    if (navigator.geolocation) {
      this.position = await this.getCoords();
      this.weatherServise
        .getCurrentLocation(this.position)
        .pipe(
          switchMap((res) => this.weatherServise.getWeather(res.location.name))
        )
        .subscribe((response) => {
          const year = response.location.localtime
            .split('')
            .slice(0, 4)
            .join('');
          const date = response.location.localtime
            .split('')
            .slice(8, 10)
            .join('');
          const month = new Date().toLocaleString('en', { month: 'long' });

          this.weatherInfo.date = `${month} ${date}th, ${year}`;
          this.weatherInfo.temp = `${Math.floor(response.current.temp_c)} °С`;
          this.weatherInfo.city = `${response.location.name}, ${response.location.country}`;
        });
    } else alert('Geolocation is not supported!');
  }

  getCoords(options?: PositionOptions): Promise<any> {
    return new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    );
  }

  forecast: ForecastInfo[] = [
    {
      date: 'Feb 7th, 2022',
      weatherIcon: 'string',
      minTemp: '0 °С',
      maxTemp: '4 °С',
      weatherLabel: 'Light snow',
      wind: '2 km/h',
      humidity: '70%',
    },
    {
      date: 'Feb 7th, 2022',
      weatherIcon: 'string',
      minTemp: '0 °С',
      maxTemp: '4 °С',
      weatherLabel: 'Light snow',
      wind: '2 km/h',
      humidity: '70%',
    },
    {
      date: 'Feb 7th, 2022',
      weatherIcon: 'string',
      minTemp: '0 °С',
      maxTemp: '4 °С',
      weatherLabel: 'Light snow',
      wind: '2 km/h',
      humidity: '70%',
    },
  ];
}
