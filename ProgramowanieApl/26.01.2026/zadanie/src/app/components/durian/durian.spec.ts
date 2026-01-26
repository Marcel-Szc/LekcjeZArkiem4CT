import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durian } from './durian';

describe('Durian', () => {
  let component: Durian;
  let fixture: ComponentFixture<Durian>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Durian]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Durian);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
