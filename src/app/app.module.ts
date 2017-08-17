import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routing }        from './app.routing';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
