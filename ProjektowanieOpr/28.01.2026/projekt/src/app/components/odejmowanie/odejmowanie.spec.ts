import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Odejmowanie } from './odejmowanie';

describe('Odejmowanie', () => {
  let component: Odejmowanie;
  let fixture: ComponentFixture<Odejmowanie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Odejmowanie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Odejmowanie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
