import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component';
import { EditKegDetailsComponent } from './edit-keg-details.component';
import { NewKegComponent } from './new-keg.component';
import { LowPipe } from './pints-remaining.pipe';

@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  directives: [KegComponent, EditKegDetailsComponent, NewKegComponent],
  pipes: [LowPipe],
  template: `
  <select (change)="onPintsViewChange($event.target.value)" class="filter">
    <option value="124">Show All</option>
    <option value="10">Show Low Kegs</option>
  </select>
  <div class= "beer-display">
  <keg-display *ngFor="#currentKeg of kegList | pintsRemaining:remainingPints" (click)="kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg" >
  </keg-display>
  </div>
  <edit-keg-details  *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-details>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
`
})

export class KegListComponent {
  public kegList: Keg [];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public remainingPints: number = 124;
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
    console.log(this.selectedKeg.name)
  }
  createKeg (parameters:[string, string, number, number]): void {
    this.kegList.push(new Keg(parameters[0], parameters[1], parameters[2], parameters[3], this.kegList.length)
    );
  }
  onPintsViewChange(filterOption) {
    this.remainingPints = filterOption;
  }
}
