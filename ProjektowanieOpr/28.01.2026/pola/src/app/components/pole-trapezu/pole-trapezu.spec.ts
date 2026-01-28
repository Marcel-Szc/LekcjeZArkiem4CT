import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleTrapezu } from './pole-trapezu';

describe('PoleTrapezu', () => {
  let component: PoleTrapezu;
  let fixture: ComponentFixture<PoleTrapezu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoleTrapezu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoleTrapezu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
