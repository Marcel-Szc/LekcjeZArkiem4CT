import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleRombu } from './pole-rombu';

describe('PoleRombu', () => {
  let component: PoleRombu;
  let fixture: ComponentFixture<PoleRombu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoleRombu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoleRombu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
