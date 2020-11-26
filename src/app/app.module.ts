import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { ClickTravelService } from './services/click-travel.service';
import { HomeComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ClickTravelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
