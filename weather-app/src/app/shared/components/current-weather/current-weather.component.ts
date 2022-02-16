import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() hasFavorite: boolean = true;
  @Input() hasTemperature: boolean = true;
  @Input() hasInfo: boolean = true;

  ngOnInit(): void { }
}
