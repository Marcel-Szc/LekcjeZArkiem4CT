import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dyrektywy } from './dyrektywy';

describe('Dyrektywy', () => {
  let component: Dyrektywy;
  let fixture: ComponentFixture<Dyrektywy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Dyrektywy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dyrektywy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
