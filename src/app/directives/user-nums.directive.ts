import {Directive, HostListener, Input, HostBinding} from '@angular/core';

@Directive({
  selector: '[userNums]'
})
export class UserNumsDirective {
  backgroundColor:string = 'lightGreen';
  @Input() userNums = [];

  @HostListener('click', ['$event.target']) collectNumbers(element) {
    if (this.numIsRepeated(element.innerHTML)) {
      var index = this.userNums.indexOf(element.innerHTML * 1);
      this.userNums.splice(index, 1);
      element.style.backgroundColor = 'inherit';
      return
    }
    if (isNaN(element.innerHTML * 1)) {
      return
    }
    this.userNums.push(element.innerHTML * 1);
    element.style.backgroundColor = this.backgroundColor
  }

  numIsRepeated(currentNum) {
    return this.userNums.includes(currentNum * 1);
  }
  

}

