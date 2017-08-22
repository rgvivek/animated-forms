import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationWizardComponent } from './evaluation-wizard.component';

describe('EvaluationWizardComponent', () => {
  let component: EvaluationWizardComponent;
  let fixture: ComponentFixture<EvaluationWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
