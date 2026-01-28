import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dzielenie } from './dzielenie';

describe('Dzielenie', () => {
  let component: Dzielenie;
  let fixture: ComponentFixture<Dzielenie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dzielenie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dzielenie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
