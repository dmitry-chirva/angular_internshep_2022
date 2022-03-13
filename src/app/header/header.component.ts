import {Component} from '@angular/core';
import {FormControl} from "@angular/forms";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  search = new FormControl('');

  out: any[] = []

  constructor(private http: HttpClient) { }

  getList (): any {
    this.http.get<[]>(
      `http://api.weatherapi.com/v1/search.json?key=b88614b3fb684e8b996104153220302&q=${this.search.value}`
    ).subscribe((data) => this.out = data)
  }
}
