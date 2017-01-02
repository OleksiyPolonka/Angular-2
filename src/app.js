import { Component } from '@angular/core';

export default class App {
  constructor() {
    this.what = "a good time!";
  }
};

App.annotations = [
  new Component({
    selector: 'my-app',
    template: `
      <h1>Welcome to your Angular2 + Webpack + ES6 Playground</h1>
      <h2>Have {{ what }}</h2>
    `
  })
];
