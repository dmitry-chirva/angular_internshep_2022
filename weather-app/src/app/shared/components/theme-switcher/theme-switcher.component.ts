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
  theme = this.lightTheme;

  ngOnInit(): void {}

  onToggle(theme: string): void {
    console.log(theme);
    this.theme = theme === this.lightTheme ? this.darkTheme : this.lightTheme;
  }
}
