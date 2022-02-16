import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {

  hasFavorite: boolean;

  constructor(router: Router) {
    this.hasFavorite = router.url === '/:city/details';
  }

  ngOnInit(): void {
  }
}
