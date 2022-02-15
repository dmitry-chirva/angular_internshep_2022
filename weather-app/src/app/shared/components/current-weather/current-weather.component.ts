import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
})
export class CurrentWeatherComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }
    openDetailsPage() {
    this.router.navigate(['/:city/details']);
  }
}
