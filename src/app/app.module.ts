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

@NgModule({
  declarations: [
    AppComponent,
    AnimatedInputComponent,
    SimpleFormComponent,
    TabsComponent,
    TabComponent,
    SimpleWizardComponent
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
