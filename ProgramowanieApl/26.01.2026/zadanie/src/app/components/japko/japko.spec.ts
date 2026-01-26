import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Japko } from './japko';

describe('Japko', () => {
  let component: Japko;
  let fixture: ComponentFixture<Japko>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Japko]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Japko);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
