import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {HeaderComponent} from "./header/header.component";
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { ForecastComponent } from './forecast/forecast.component';

import { CurrentWeatherComponent } from './current-weather/current-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    ForecastComponent,
    CurrentWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
