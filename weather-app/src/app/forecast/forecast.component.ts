import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  constructor(private router: Router) {}

  public city: string = "Kyiv, Ukraine";
  public forecast: object[] = [
    {
      date: "Feb 7th, 2022",
      icon: "string",
      minTemp: "0",
      maxTemp: "4",
      weather: "Light snow",
      wind: "2 km/h",
      humidity: "70%"
    },
    {
      date: "Feb 7th, 2022",
      icon: "string",
      minTemp: "0",
      maxTemp: "4",
      weather: "Light snow",
      wind: "2 km/h",
      humidity: "70%"
    }
  ]

  ngOnInit(): void {}

  openDetailsPage() {
    this.router.navigate(['/:city/details']);
  }

  openHomePage() {
    this.router.navigate(['/']);
  }
}
