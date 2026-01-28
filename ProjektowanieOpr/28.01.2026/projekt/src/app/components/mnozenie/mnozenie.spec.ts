import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mnozenie } from './mnozenie';

describe('Mnozenie', () => {
  let component: Mnozenie;
  let fixture: ComponentFixture<Mnozenie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Mnozenie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mnozenie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
