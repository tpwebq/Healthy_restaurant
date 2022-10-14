import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutModule } from "./about/about.module";
import { ComingsoonModule } from "./comingsoon/comingsoon.module";
import { ContactModule } from "./contact/contact.module";
import { DeliveryModule } from "./delivery/delivery.module";
import { ErrorModule } from "./error/error.module";
import { HomeModule } from "./home/home.module";
import { MenuModule } from "./menu/menu.module";
import { PrivacyModule } from "./privacy/privacy.module";
import { ReservationModule } from "./reservation/reservation.module";
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutModule,
    ComingsoonModule,
    ContactModule,
    DeliveryModule,
    ErrorModule,
    HomeModule,
    MenuModule,
    PrivacyModule,
    ReservationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
