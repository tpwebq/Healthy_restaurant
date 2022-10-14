import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryS2Component } from './delivery-s2.component';

describe('DeliveryS2Component', () => {
  let component: DeliveryS2Component;
  let fixture: ComponentFixture<DeliveryS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
