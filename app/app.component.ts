import { Component } from 'angular2/core';
import { KegListComponent } from './keg-list.component';
import { Keg } from './keg.model';

@Component({
  selector: 'tap-room',
  directives: [KegListComponent],
  template: `
  <div class="header">
   <h1>Epicodus Tap Room</h1>
   <img src="resources/images/Beer.ico" alt="beer mug">
   </div>
  <keg-list
    [kegList]="kegs">
  </keg-list>
  `
})

export class AppComponent {
  public kegs: Keg [];
  constructor () {
    this.kegs = [
      new Keg("Lil Sumpin'", "Lagunitas", 5, 6, 0),
      new Keg("Dancing Apples", "PDX Ciderhouse", 4, 3, 1),
      new Keg("Stella Artois", "Anheuser-Busch", 7, 5, 2),
      new Keg("Space Fruit", "Coaltion Brewing", 5.5, 7, 3),
      new Keg("Apocalypse", "10 Barrel Brewing", 5.25, 6.8, 4)
    ];
  }

}
