import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationS1Component } from './reservation-s1.component';

describe('ReservationS1Component', () => {
  let component: ReservationS1Component;
  let fixture: ComponentFixture<ReservationS1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationS1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationS1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
