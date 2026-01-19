import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zarabisty } from './zarabisty';

describe('Zarabisty', () => {
  let component: Zarabisty;
  let fixture: ComponentFixture<Zarabisty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Zarabisty]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zarabisty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
