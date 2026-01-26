import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacjadruga } from './animacjadruga';

describe('Animacjadruga', () => {
  let component: Animacjadruga;
  let fixture: ComponentFixture<Animacjadruga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacjadruga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacjadruga);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
