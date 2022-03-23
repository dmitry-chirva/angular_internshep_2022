import {Component, Input, OnInit} from '@angular/core';
import {CityWeatherInfo} from "../../interfaces/city-weather-info.interfaces";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  data!: CityWeatherInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
