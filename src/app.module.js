import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule }   from '@angular/forms';
import { App }  from './app.components';

export class AppModule { }

AppModule.anottations = [
  new NgModule({
    imports: [
      BrowserModule,
      // FormsModule
    ],
    declarations: [
      App
    ],
    bootstrap: [ AppComponent ]
  })
];
