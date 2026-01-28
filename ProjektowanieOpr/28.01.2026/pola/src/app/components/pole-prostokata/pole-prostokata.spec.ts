import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleProstokata } from './pole-prostokata';

describe('PoleProstokata', () => {
  let component: PoleProstokata;
  let fixture: ComponentFixture<PoleProstokata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoleProstokata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoleProstokata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
