import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryS1Component } from './delivery-s1.component';

describe('DeliveryS1Component', () => {
  let component: DeliveryS1Component;
  let fixture: ComponentFixture<DeliveryS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
