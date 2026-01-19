import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Normalny } from './normalny';

describe('Normalny', () => {
  let component: Normalny;
  let fixture: ComponentFixture<Normalny>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Normalny]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Normalny);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
