import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservationRoutingModule } from './reservation-routing.module';
import { ReservationS1Component } from './reservation-s1/reservation-s1.component';
import { ReservationS2Component } from './reservation-s2/reservation-s2.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { PaymentDataComponent } from './payment-data/payment-data.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PayWithComponent } from './pay-with/pay-with.component';
import { PersonalDataComponent } from './personal-data/personal-data.component';
import { ReservationComponent } from './reservation.component';


@NgModule({
  declarations: [
    ReservationS1Component,
    ReservationS2Component,
    ReservationDetailsComponent,
    PaymentDataComponent,
    PaymentDetailsComponent,
    PayWithComponent,
    PersonalDataComponent,
    ReservationComponent
  ],
  imports: [
    CommonModule,
    ReservationRoutingModule
  ]
})
export class ReservationModule { }
