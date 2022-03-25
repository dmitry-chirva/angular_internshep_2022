import { Component, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ConditionService } from 'src/core/api/common/condition.service';
import { Constants } from 'src/core/api/common/constants';
import { HomeService } from 'src/core/api/home/home.service';
import { CurrentWeatherData } from 'src/core/api/weather/current-weather.type';
import { GeoLocationService } from 'src/core/api/weather/geo-location.service';
import { ThemeTypes } from './shared/enums/theme-types.enum';
import { ThemeService } from '../core/theme/theme.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'weather-app';
  pathToBackgroundImg = '';

  private subscribers$ = new Subject();

  constructor(
    private homeService: HomeService,
    private geoLocationService: GeoLocationService,
    private conditionService: ConditionService,
    private themeService: ThemeService,
    private renderer: Renderer2
  ) {}
  ngOnInit(): void {
    this.homeService
      .getCurrentWeatherHome(this.geoLocationService.getPosition(), Constants.DEFAULT_CITY)
      .pipe(takeUntil(this.subscribers$))
      .subscribe(({ condition }: CurrentWeatherData) => {
        this.pathToBackgroundImg =
          this.conditionService.getBackgroundImagePath(condition);
      });

    this.themeService.getTheme$()
      .pipe(takeUntil(this.subscribers$))
      .subscribe(theme => {
        this.applyTheme(theme);
      })
  }

  ngOnDestroy(): void {
    this.subscribers$.next(null);
    this.subscribers$.complete();
  }

  private applyTheme(themeType: ThemeTypes): void {
    this.renderer.removeClass(document.body, ThemeTypes.LIGHT);
    this.renderer.removeClass(document.body, ThemeTypes.DARK);

    this.renderer.addClass(document.body, themeType);
  }
}
