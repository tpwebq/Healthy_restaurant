import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationS2Component } from './reservation-s2.component';

describe('ReservationS2Component', () => {
  let component: ReservationS2Component;
  let fixture: ComponentFixture<ReservationS2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationS2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationS2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
