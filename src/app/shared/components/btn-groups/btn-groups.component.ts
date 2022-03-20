import { Component, Input } from '@angular/core';
import { CityWeatherInfo } from '../../interfaces/city-weather-info.interfaces';

@Component({
  selector: 'app-btn-groups',
  templateUrl: './btn-groups.component.html',
  styleUrls: ['./btn-groups.component.scss']
})
export class BtnGroupsComponent {
  @Input() weatherInfo : CityWeatherInfo | null = null;
}
