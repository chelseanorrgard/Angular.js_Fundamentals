import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weather2 } from './weather2';

describe('Weather2', () => {
  let component: Weather2;
  let fixture: ComponentFixture<Weather2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weather2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weather2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
