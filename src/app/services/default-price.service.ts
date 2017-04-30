import {EventEmitter} from '@angular/core';

export class DefaultPriceService {

  send = new EventEmitter<Object>();

  sendData(num:string, value:number) {
    this.send.emit({num: num, value: value})
  }

}
