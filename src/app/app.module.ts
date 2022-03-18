import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ForecastModule } from './forecast/forecast.module';
import { DetailsModule } from './details/details.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    HomeModule,
    ForecastModule,
    DetailsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
