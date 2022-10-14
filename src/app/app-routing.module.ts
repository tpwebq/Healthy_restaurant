import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./about/about.component";
import { ComingsoonComponent } from "./comingsoon/comingsoon/comingsoon.component";
import { ContactComponent } from "./contact/contact.component";
import { DeliveryComponent } from "./delivery/delivery.component";
import { ErrorComponent } from "./error/error/error.component";
import { HomeComponent } from "./home/home.component";
import { MenuComponent } from "./menu/menu.component";
import { PrivacyComponent } from "./privacy/privacy/privacy.component";
import { ReservationComponent } from "./reservation/reservation.component";

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"comingsoon",
    component: ComingsoonComponent
  },
  {
    path:"contact",
    component: ContactComponent
  },
  {
    path:"delivery",
    component: DeliveryComponent
  },
  {
    path:"menu",
    component: MenuComponent
  },
  {
    path:"privacy",
    component: PrivacyComponent
  },
  {
    path:"reservation",
    component: ReservationComponent
  },
  {
    path:"**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
