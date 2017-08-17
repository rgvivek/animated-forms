import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './app.routing';

import { AppComponent } from './app.component';
import { AnimatedInputComponent } from './common/animated-input/animated-input.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimatedInputComponent,
    SimpleFormComponent
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
