import { Component, Input } from '@angular/core';
import { BreadcrumbLink } from '../../interfaces/breadcrumbs-links.interfaces';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {

  @Input() links: BreadcrumbLink[] = []; 

  constructor() { }
}
