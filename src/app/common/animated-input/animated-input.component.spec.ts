import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedInputComponent } from './animated-input.component';

describe('AnimatedInputComponent', () => {
  let component: AnimatedInputComponent;
  let fixture: ComponentFixture<AnimatedInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
