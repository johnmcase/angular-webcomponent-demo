import { BrowserModule } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule
} from '@angular/core';
import SymplButton from 'fluent-webcomponent-exporter/build/SymplButton';
import SymplDatePicker from 'fluent-webcomponent-exporter/build/SymplDatePicker';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule
  ],
  entryComponents: [SymplButton, SymplDatePicker],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
