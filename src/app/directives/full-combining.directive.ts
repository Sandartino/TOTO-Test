import {Directive, HostListener, Input, Output, EventEmitter} from '@angular/core';
import {CombinatoricsFullService} from "../services/combinatorics-full.service";
import {UserNumsDirective} from "./user-nums.directive";

@Directive({
  selector: '[fullCombining]',
  providers: [CombinatoricsFullService]
})
export class FullCombiningDirective {

  constructor(private combinatoricsFullService:CombinatoricsFullService,
              private userNumsDirective:UserNumsDirective) {
  }

  userNumCount:number;
  @Input() gameNumCount:number;
  @Input() inFullCombining:boolean;

  @Output() fullCombining = new EventEmitter<number>();

  @HostListener('click') combinations() {
    this.userNumCount = this.userNumsDirective.userNums.length;
    if (this.inFullCombining) {
      if (this.userNumCount > this.gameNumCount) {
        var emit = this.combinatoricsFullService.combinations(this.userNumCount, this.gameNumCount);
        this.fullCombining.emit(emit)
      } else {
        this.fullCombining.emit(0);
      }
    }

  }

}
