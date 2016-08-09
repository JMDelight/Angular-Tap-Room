import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'keg-display',
  inputs: ['keg'],
  template: `
  <div>
  <label>{{ keg.name }}| {{ keg.brand }} | $ {{ keg.price }} | {{ keg.alcoholContent }} %| {{ keg.remainingPints }}</label>
   <button (click)="pourPint()" name="label">Pour A Pint</button>
   </div>`
})
 export class KegComponent {
   public keg: Keg;
   pourPint() {

   }
 }
