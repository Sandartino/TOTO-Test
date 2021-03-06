import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[userNums]'
})
export class UserNumsDirective {
  backgroundColor:string = '#BCF279';
  @Input() userNums = [];
  @Input() limitNums:number;
  @Input() inFullCombining:boolean;


  @HostListener('click', ['$event.target']) collectNumbers(element) {
    var length = this.userNums.length + 1;

    if (this.inFullCombining) {
      length = 0;
    }
    if (isNaN(element.innerHTML * 1)) {
      return
    }
    if (length <= this.limitNums) {
      if (this.numIsRepeated(element.innerHTML)) {
        var index = this.userNums.indexOf(element.innerHTML * 1);
        this.userNums.splice(index, 1);
        element.style.backgroundColor = '#FFFFF8';
        return
      }
      this.userNums.push(element.innerHTML * 1);
      element.style.backgroundColor = this.backgroundColor
    } else {
      if (this.numIsRepeated(element.innerHTML)) {
        var index = this.userNums.indexOf(element.innerHTML * 1);
        this.userNums.splice(index, 1);
        element.style.backgroundColor = '#FFFFF8';
        return
      }
    }
  }

  numIsRepeated(currentNum) {
    return this.userNums.includes(currentNum * 1);
  }


}

