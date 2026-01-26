import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Animacjapierwsza } from './animacjapierwsza';

describe('Animacjapierwsza', () => {
  let component: Animacjapierwsza;
  let fixture: ComponentFixture<Animacjapierwsza>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Animacjapierwsza]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Animacjapierwsza);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
