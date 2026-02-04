import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Zdjecia } from './zdjecia';

describe('Zdjecia', () => {
  let component: Zdjecia;
  let fixture: ComponentFixture<Zdjecia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Zdjecia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Zdjecia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
