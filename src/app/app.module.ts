import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { SharedModule } from '@shared/shared.module';
import { CountryModule } from '@country/country.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule( {
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CountryModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule { }
