import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {CityWeatherInfo} from "../../interfaces/city-weather-info.interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  data!: CityWeatherInfo;
  @Output() favoriteCity = new EventEmitter<CityWeatherInfo>();
  constructor() { }

  ngOnInit(): void {
  }

  onChange(city:CityWeatherInfo){
    this.favoriteCity.emit(city);
  }
}
