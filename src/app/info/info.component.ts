import {Component} from '@angular/core';
import {DefaultPriceService} from "../services/default-price.service";

@Component({
  selector: 'info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  priceThree_5 = 3;
  priceFour_5 = 50;
  priceFive_5 = 10000;

  priceThree_6 = 3;
  priceFour_6 = 50;
  priceFive_6 = 2000;
  priceSix_6 = 2000000;

  constructor(private defaultPriceService:DefaultPriceService) {
  }

  newPrice(num:string, price:number) {
    return this.defaultPriceService.sendData(num, price)
  }

  plus(e) {
    var price = e.getAttribute('data-price');

    switch (price) {
      case '3.5' :
        this.priceThree_5 += 1;
        this.newPrice('3.5', this.priceThree_5);
        break;
      case '4.5' :
        this.priceFour_5 += 10;
        this.newPrice('4.5', this.priceFour_5);
        break;
      case '5.5' :
        this.priceFive_5 += 500;
        this.newPrice('5.5', this.priceFive_5);
        break;
      case '3.6' :
        this.priceThree_6 += 1;
        this.newPrice('3.6', this.priceThree_6);
        break;
      case '4.6' :
        this.priceFour_6 += 10;
        this.newPrice('4.6', this.priceFour_6);
        break;
      case '5.6' :
        this.priceFive_6 += 500;
        this.newPrice('5.6', this.priceFive_6);
        break;
      case '6.6' :
        this.priceSix_6 += 1000000;
        this.newPrice('6.6', this.priceSix_6);
        break;
      default :
        alert('Error at change default price');
    }
  }

  minus(e) {
    var price = e.getAttribute('data-price');
    switch (price) {
      case '3.5' :
       if(this.priceThree_5 > 1){
         this.priceThree_5 -= 1;
         this.newPrice('3.5', this.priceThree_5)
       }
        break;
      case '4.5' :
        if(this.priceFour_5 > 10){
          this.priceFour_5 -= 10;
          this.newPrice('4.5', this.priceFour_5);
        }
        break;
      case '5.5' :
        if(this.priceFive_5 > 500){
          this.priceFive_5 -= 500;
          this.newPrice('5.5', this.priceFive_5);
        }
        break;

      case '3.6' :
        if(this.priceThree_6 > 1){
          this.priceThree_6 -= 1;
          this.newPrice('3.6', this.priceThree_6)
        }
        break;
      case '4.6' :
        if(this.priceFour_6 > 10){
          this.priceFour_6 -= 10;
          this.newPrice('4.6', this.priceFour_6);
        }
        break;
      case '5.6' :
        if(this.priceFive_6 > 500){
          this.priceFive_6 -= 500;
          this.newPrice('5.6', this.priceFive_6);
        }
        break;
      case '6.6' :
        if(this.priceSix_6 > 1000000){
          this.priceSix_6 -= 1000000;
          this.newPrice('6.6', this.priceSix_6);
        }
        break;
      default :
        alert('Error at change default price');
    }
  }


}
