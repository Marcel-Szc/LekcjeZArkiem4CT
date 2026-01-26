import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Banan } from './banan';

describe('Banan', () => {
  let component: Banan;
  let fixture: ComponentFixture<Banan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Banan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Banan);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
