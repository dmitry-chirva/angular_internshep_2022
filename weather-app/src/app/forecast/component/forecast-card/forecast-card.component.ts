import { Input, Component, OnInit } from '@angular/core';
import {forecastCardI} from "../../interfaces/forecastCard";

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {

  @Input() dayState: forecastCardI = {
    date: "",
    icon: "",
    minTemp: "",
    maxTemp: "",
    weather: "",
    wind: "",
    humidity: "",
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.dayState);
  }

}
