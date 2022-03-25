import { Component, OnDestroy, OnInit } from '@angular/core';
import { ThemeTypes } from '../../enums/theme-types.enum';
import { ThemeService } from '../../../../core/theme/theme.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit, OnDestroy {
  themeType: ThemeTypes = ThemeTypes.LIGHT;

  private subscribers$ = new Subject();

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.getTheme$()
      .pipe(takeUntil(this.subscribers$))
      .subscribe(theme =>
        this.themeType = theme
      );
  }

  ngOnDestroy(): void {
    this.subscribers$.next(null);
    this.subscribers$.complete();
  }

  get isChecked(): boolean {
    return this.themeType === ThemeTypes.DARK;
  }

  onThemeToggle(): void {
    const newTheme =  (this.themeType === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT);

    this.themeService.setTheme(newTheme);
  }
}
