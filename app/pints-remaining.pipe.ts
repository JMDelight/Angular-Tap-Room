import {Pipe, PipeTransform} from 'angular2/core';
import {Keg} from './keg.model';

@Pipe({
  name: "pintsRemaining",
  pure: false
})
export class LowPipe implements PipeTransform {
  transform(input: Keg[], args) {
    var desiredKegLevel = args [0];
    return input.filter((keg) => {
     return(keg.remainingPints <= desiredKegLevel);
    });
  }
}
