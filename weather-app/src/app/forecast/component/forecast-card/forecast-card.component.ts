import { Input, Component, OnInit } from '@angular/core';
import {ForecastInfo} from "../../../shared/interfaces/forecast-info.interfaces";

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {

  @Input() dayState: ForecastInfo = {
    date: "",
    weatherIcon: "",
    minTemp: "",
    maxTemp: "",
    weatherLabel: "",
    wind: "",
    humidity: "",
  };

  constructor() { }

  ngOnInit(): void {}

}
