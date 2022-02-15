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

  ngOnInit(): void {}

  openDetailsPage() {
    this.router.navigate(['/:city/details']);
  }

  openHomePage() {
    this.router.navigate(['/']);
  }
}
