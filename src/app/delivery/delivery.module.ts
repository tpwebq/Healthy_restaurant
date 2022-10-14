import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryRoutingModule } from './delivery-routing.module';
import { DeliveryS1Component } from './delivery-s1/delivery-s1.component';
import { DeliveryS2Component } from './delivery-s2/delivery-s2.component';
import { DeliveryComponent } from './delivery.component';


@NgModule({
  declarations: [
    DeliveryS1Component,
    DeliveryS2Component,
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule
  ]
})
export class DeliveryModule { }
