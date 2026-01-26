import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacjatrzecia } from './animacjatrzecia';

describe('Animacjatrzecia', () => {
  let component: Animacjatrzecia;
  let fixture: ComponentFixture<Animacjatrzecia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacjatrzecia]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacjatrzecia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
