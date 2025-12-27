import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Simplemath } from './simplemath';

describe('Simplemath', () => {
  let component: Simplemath;
  let fixture: ComponentFixture<Simplemath>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Simplemath]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Simplemath);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
