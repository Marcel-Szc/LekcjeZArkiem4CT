import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dodawanie } from './dodawanie';

describe('Dodawanie', () => {
  let component: Dodawanie;
  let fixture: ComponentFixture<Dodawanie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dodawanie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dodawanie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
