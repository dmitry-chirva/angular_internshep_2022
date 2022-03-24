import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/core/api/common/condition.service';
import { Constants } from 'src/core/api/common/constants';
import { HomeService } from 'src/core/api/home/home.service';
import { CurrentWeatherData } from 'src/core/api/weather/current-weather.type';
import { GeoLocationService } from 'src/core/api/weather/geo-location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'weather-app';
  pathToBackgroundImg = '';

  constructor(
    private homeService: HomeService,
    private geoLocationService: GeoLocationService,
    private conditionServise: ConditionService
  ) {}
  ngOnInit(): void {
    this.homeService
      .getCurrentWeatherHome(this.geoLocationService.getPosition(), Constants.DEFAULT_CITY)
      .subscribe(({ condition }: CurrentWeatherData) => {
        this.pathToBackgroundImg =
          this.conditionServise.getBackgroundImagePath(condition);
      });
  }
}
