import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleTrojkata } from './pole-trojkata';

describe('PoleTrojkata', () => {
  let component: PoleTrojkata;
  let fixture: ComponentFixture<PoleTrojkata>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PoleTrojkata]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoleTrojkata);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
