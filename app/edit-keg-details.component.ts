import { Component } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'edit-keg-details',
  inputs: ['keg'],
  template: `
  <br>
  <div class="container">
  <h3> Edit Name: {{ keg.name}}</h3>
  <input [(ngModel)]="keg.name" class="col-sm-4 keg-form"/>
  </div>
  <div class="container">
  <h3> Edit Brand: {{ keg.brand}}</h3>
  <input [(ngModel)]="keg.brand" class="col-sm-4 keg-form"/>
  </div>
  <div class="container">
  <h3> Edit Price: {{ keg.price}}</h3>
  <input type="number" step=0.25 min=2 [(ngModel)]="keg.price" class="col-sm-4 keg-form"/>
  </div>
  <div class="container">
  <h3> Edit Alcohol Content: {{ keg.alcoholContent}}</h3>
  <input type="number" step=0.1 min=0.1 max=100 [(ngModel)]="keg.alcoholContent" class="col-sm-4 keg-form"/>
  </div>
  <div class="container">
  <h3> Edit Remaining Pints: {{ keg.remainingPints}}</h3>
  <input type="number" min=0 max=124 [(ngModel)]="keg.remainingPints" class="col-sm-4 keg-form"/>
  </div>
  `
})
export class EditKegDetailsComponent {
  public keg: Keg;
}


//
