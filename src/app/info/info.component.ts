import {Component} from '@angular/core';
import {DefaultPriceService} from "../services/default-price.service";

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  priceThree = 3;
  priceFour = 50;
  priceFive = 5000;

  constructor(private defaultPriceService:DefaultPriceService) {

  }

  onDefaultPrice(num:string, price:number) {
    return this.defaultPriceService.sendData(num, price)
  }

  plus(e) {
    var price = e.getAttribute('data-price');

    switch (price) {
      case '3' :
        this.priceThree += 1;
        this.onDefaultPrice('3', this.priceThree);
        break;
      case '4' :
        this.priceFour += 10;
        this.onDefaultPrice('4', this.priceFour);
        break;
      case '5' :
        this.priceFive += 500;
        this.onDefaultPrice('5', this.priceFive);
        break;
      default :
        alert('Error at change default price');
    }
  }

  minus(e) {
    var price = e.getAttribute('data-price');
    switch (price) {
      case '3' :
       if(this.priceThree > 1){
         this.priceThree -= 1;
         this.onDefaultPrice('3', this.priceThree)
       }
        break;
      case '4' :
        if(this.priceFour > 10){
          this.priceFour -= 10;
          this.onDefaultPrice('4', this.priceFour);
        }
        break;
      case '5' :
        if(this.priceFive > 500){
          this.priceFive -= 500;
          this.onDefaultPrice('5', this.priceFive);
        }
        break;
      default :
        alert('Error at change default price');
    }
  }


}
