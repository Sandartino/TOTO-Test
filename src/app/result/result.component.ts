import {Component, OnInit, Input} from '@angular/core';
import {DefaultPriceService} from '../services/default-price.service'

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  isVisible:boolean = true;
  priceThree:number = 3;
  priceFour:number = 50;
  priceFive:number = 5000;
  newPrice:Object;
  sum:number = 0;
  result:number = 0;
  @Input() priceForYear:number;
  @Input() three:number;
  @Input() four:number;
  @Input() five:number;

  constructor(private defaultPriceService:DefaultPriceService) {
  }

  ngOnInit() {
    this.defaultPriceService.send.subscribe(data => this.newPrice = data);
  }

  ngDoCheck() {
    this.priceChange(this.newPrice)
  }
  ngOnChanges(){
    this.summation();
    this.subtraction()
  }

  priceChange(data:Object) {
    if (!!data) {
      switch (data['num']) {
        case '3':
          this.priceThree = data['value'];
          break;
        case '4':
          this.priceFour = data['value'];
          break;
        case '5':
          this.priceFive = data['value'];
          break;
        default:
          alert('Error at result.component');
          break;
      }
    }
  }

  summation() {
    this.sum =
      (this.three * this.priceThree) +
      (this.four * this.priceFour) +
      (this.five * this.priceFive)
  }
  subtraction(){
    return this.result = this.sum - this.priceForYear;
  }

  see() {
    console.log(this.priceThree);
    console.log(this.priceFour);
    console.log(this.priceFive)
  }

}
