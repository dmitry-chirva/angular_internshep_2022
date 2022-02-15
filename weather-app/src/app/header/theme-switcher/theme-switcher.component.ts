import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  constructor() {}
  lightTheme = 'light';
  darkTheme = 'dark';

  value = this.lightTheme;
  ngOnInit(): void {}

  onToggle(value: string): void {
    console.log(value);
    value === this.lightTheme
      ? (this.value = this.darkTheme)
      : (this.value = this.lightTheme);
  }
}
