import 'reflect-metadata';
import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { enableProdMode } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import App from './app';

class AppModule { }

AppModule.annotations = [
  new NgModule({
    imports: [ BrowserModule ],
    declarations: [
      App
    ],
    bootstrap: [ App ]
  })
];

platformBrowserDynamic().bootstrapModule(AppModule);