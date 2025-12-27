import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vowelsfinder } from './vowelsfinder';

describe('Vowelsfinder', () => {
  let component: Vowelsfinder;
  let fixture: ComponentFixture<Vowelsfinder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vowelsfinder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vowelsfinder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
