import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-card',
  templateUrl: './forecast-card.component.html',
  styleUrls: ['./forecast-card.component.scss']
})
export class ForecastCardComponent implements OnInit {

  @Input() dayState: object = {};

  constructor() { }

  ngOnInit(): void {
  }

}
