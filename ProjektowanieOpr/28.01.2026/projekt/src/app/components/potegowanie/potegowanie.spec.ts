import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Potegowanie } from './potegowanie';

describe('Potegowanie', () => {
  let component: Potegowanie;
  let fixture: ComponentFixture<Potegowanie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Potegowanie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Potegowanie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
