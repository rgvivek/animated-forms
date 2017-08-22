import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { AnimatedInputComponent } from './common/animated-input/animated-input.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { TabsComponent } from './common/tabs/tabs.component';
import { TabComponent } from './common/tabs/tab/tab.component';
import { SimpleWizardComponent } from './simple-wizard/simple-wizard.component';
import { EvaluationWizardComponent } from './evaluation-wizard/evaluation-wizard.component';
import { BasicInfoComponent } from './evaluation-wizard/basic-info/basic-info.component';
import { SkillsInfoComponent } from './evaluation-wizard/skills-info/skills-info.component';
import { ScoresInfoComponent } from './evaluation-wizard/scores-info/scores-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedInputComponent,
    SimpleFormComponent,
    TabsComponent,
    TabComponent,
    SimpleWizardComponent,
    EvaluationWizardComponent,
    BasicInfoComponent,
    SkillsInfoComponent,
    ScoresInfoComponent
  ],
  imports: [
    BrowserModule,
    Routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
