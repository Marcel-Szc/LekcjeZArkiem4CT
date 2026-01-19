import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nudny } from './nudny';

describe('Nudny', () => {
  let component: Nudny;
  let fixture: ComponentFixture<Nudny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nudny]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nudny);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
