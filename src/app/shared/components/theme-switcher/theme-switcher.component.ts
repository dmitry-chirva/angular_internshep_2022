import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {
  themes: Themes = 'light-theme';

  constructor(@Inject(DOCUMENT) private document: Document,
              private render: Renderer2) {}

  lightTheme = 'light';
  darkTheme = 'dark';
  theme = this.lightTheme;

  ngOnInit(): void {
    this.initializeTheme();
  }

  switchTheme() {
    this.document.body.classList.replace(
      this.themes, 
      this.themes === 'light-theme' 
        ? (this.themes = 'dark-theme') 
        : (this.themes = 'light-theme')
      );
  }

  initializeTheme = (): void => 
    this.render.addClass(this.document.body, this.themes)

  onToggle(theme: string): void {
    this.theme = theme === this.lightTheme ? this.darkTheme : this.lightTheme;
  }
}

export type Themes = 'light-theme' | 'dark-theme';
