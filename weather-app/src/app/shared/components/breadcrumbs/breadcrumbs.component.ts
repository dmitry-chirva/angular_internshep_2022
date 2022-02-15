import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void { }
  openHomePage() {
    this.router.navigate(['/']);
  }
  openDetailsPage() {
    this.router.navigate(['/:city/details']);
  }
  openForecastPage() {
    this.router.navigate(['/:city/details/forecast']);
  }
}
