import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/core/api/weather/weather.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private weatherServise: WeatherService) {}

  getYear: string = '';

  ngOnInit() {
    this.weatherServise.getWeather().subscribe((res) => {
      const year = res.location.localtime.split('').slice(0, 4).join('');

      this.getYear = year;
    });
  }
}
