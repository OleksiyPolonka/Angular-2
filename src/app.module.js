import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import App from './app.components';

const moduleAnnotations = new NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    App
  ],
  bootstrap: [App]
});

class AppModule { }

AppModule.annotations = [moduleAnnotations];

platformBrowserDynamic().bootstrapModule(AppModule);
