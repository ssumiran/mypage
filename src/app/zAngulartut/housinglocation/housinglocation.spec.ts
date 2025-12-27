import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Housinglocation } from './housinglocation';

describe('Housinglocation', () => {
  let component: Housinglocation;
  let fixture: ComponentFixture<Housinglocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Housinglocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Housinglocation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
