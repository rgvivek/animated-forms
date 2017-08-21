import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWizardComponent } from './simple-wizard.component';

describe('SimpleWizardComponent', () => {
  let component: SimpleWizardComponent;
  let fixture: ComponentFixture<SimpleWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
