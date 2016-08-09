import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'new-keg',
  outputs: ['onSubmitNewKeg'],
  template: `
  <div class="new-keg">
  <div class="container">
  <h3> Input Name:</h3>
  <input #newName class="col-sm-4 keg-form"/>
  </div>
  <div class="container">
  <h3> Input Brand: </h3>
  <input #newBrand class="col-sm-4 keg-form"/>
  </div>
  <div class="container">
  <h3> Input Price:</h3>
  <input #newPrice type="number" step=0.25 min=2 class="col-sm-4 keg-form"/>
  </div>
  <div class="container">
  <h3> Input Alcohol Content: </h3>
  <input #newAlcoholContent type="number" step=0.1 min=0.1 max=100 class="col-sm-4 keg-form"/>
  </div>
  </div>
  <div class="add-button">
  <button (click)="addKeg(newName, newBrand, newPrice, newAlcoholContent)" class="btn-success btn-lg add-button">Add Keg</button>
  </div>
  `
})

export class NewKegComponent {
  public onSubmitNewKeg: EventEmitter<string>;
  constructor(){
  this.onSubmitNewKeg= new EventEmitter();
}
  addKeg(userName: HTMLInputElement, userBrand: HTMLInputElement, userPrice: HTMLInputElement, userAlcoholContent: HTMLInputElement){
  var KegParameters: [string, string, number, number]=[userName.value, userBrand.value, parseInt(userPrice.value), parseInt(userAlcoholContent.value)];
  this.onSubmitNewKeg.emit(KegParameters);
  }
}
