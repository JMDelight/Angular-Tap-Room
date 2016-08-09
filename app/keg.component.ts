import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div class="beer-selection" [class.cheap]="keg.price < 5" [class.expensive]="keg.price > 6" [class.strong]="keg.alcoholContent >= 7">
    <h1>{{ keg.name }}</h1>
    <h3> {{ keg.brand }}</h3>
    <ul>
      <li>Price: $ {{ keg.price }}</li>
      <li>Alcohol Content: {{ keg.alcoholContent }}%</li>
      <li>Remaining Pints: {{ keg.remainingPints }}</li>
    </ul>
    <button (click)="pourPint()" name="label">Pour A Pint</button>
   </div>
   `
})
 export class KegComponent {
   public keg: Keg;
   pourPint() {
     this.keg.remainingPints --;
   }
 }
