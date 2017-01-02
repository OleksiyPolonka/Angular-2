import { Component } from '@angular/core';

export class Hero {
  constructor(props) {
    this.name = props.name;
    this.id = props.id;
  }
}

export default class App {
  constructor() {
    this.title = 'Tour of Heroes';
    this.hero = new Hero ({
       id: 1,
       name: 'Windstorm'
    });
  }
};

App.annotations = [
  new Component({
    selector: 'my-app',
    template: `
      <h1>{{ title }}</h1>
      <h2>{{ hero.name }} details</h2>
      <div>
        <label>id: </label>
        {{ hero.id }}
      </div>
      <div>
        <label>name: </label>
        <input value='{{ hero.name }}' placeholder='name'>
      </div>
    `
  })
];
