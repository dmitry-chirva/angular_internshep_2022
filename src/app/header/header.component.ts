import { Component } from '@angular/core';
import {SearchService} from "../../core/api/search/search.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  constructor(private search: SearchService) {
    this.search.getSearchList('lon')
  }
}
