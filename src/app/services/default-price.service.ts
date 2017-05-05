import {EventEmitter} from '@angular/core';

export class DefaultPriceService {

  price = new EventEmitter<Object>();

  sendData(num:string, value:number) {
    this.price.emit({num: num, value: value})
  }

}
