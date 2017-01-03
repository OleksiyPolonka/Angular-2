import { Component, Input } from '@angular/core';

const componentAnnotations = new Component({
  selector: 'my-hero-detail',
  inputs: ['hero'],
  template: `
    <div *ngIf='hero.name'>
      <h2>{{ hero.name }} details!</h2>
      <div><label>id: </label>{{ hero.id }}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]='hero.name' placeholder='name'>
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  constructor() {}
}

HeroDetailComponent.annotations = [componentAnnotations, Input];
