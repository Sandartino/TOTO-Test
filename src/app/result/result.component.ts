import {Component, OnInit, Input} from '@angular/core';
import {DefaultPriceService} from '../services/default-price.service'

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  isVisible:boolean = false;
  priceThree_5:number = 3;
  priceFour_5:number = 50;
  priceFive_5:number = 10000;

  priceThree_6:number = 3;
  priceFour_6:number = 50;
  priceFive_6:number = 2000;
  priceSix_6:number = 2000000;

  newPrice:Object;
  sum:number = 0;
  result:number = 0;
  positiveResult:boolean = false;
  negativeResult:boolean = false;
  zeroResult:boolean = false;
  @Input() gameType:number;
  @Input() priceForYear:number;
  @Input() three:number;
  @Input() four:number;
  @Input() five:number;
  @Input() six:number;

  constructor(private defaultPriceService:DefaultPriceService) {
  }

  ngOnInit() {
    this.defaultPriceService.price.subscribe(data => this.newPrice = data);

  }

  ngDoCheck() {
    this.priceChange(this.newPrice)
  }

  ngOnChanges() {
    this.summation();
    this.subtraction();
  }

  priceChange(data:Object) {
    if (!!data) {
      switch (data['num']) {
        case '3.5':
          this.priceThree_5 = data['value'];
          break;
        case '4.5':
          this.priceFour_5 = data['value'];
          break;
        case '5.5':
          this.priceFive_5 = data['value'];
          break;
        case '3.6':
          this.priceThree_6 = data['value'];
          break;
        case '4.6':
          this.priceFour_6 = data['value'];
          break;
        case '5.6':
          this.priceFive_6 = data['value'];
          break;
        case '6.6':
          this.priceSix_6 = data['value'];
          break;
        default:
          alert('Error at result.component');
          break;
      }
    }
  }

  summation() {
    if (this.gameType === 5) {
      this.sum =
        (this.three * this.priceThree_5) +
        (this.four * this.priceFour_5) +
        (this.five * this.priceFive_5)
    } else {
      this.sum =
        (this.three * this.priceThree_6) +
        (this.four * this.priceFour_6) +
        (this.five * this.priceFive_6) +
        (this.six * this.priceSix_6)
    }
  }

  subtraction() {
    this.result = this.sum - this.priceForYear;
    if (this.result === 0) {
      this.zeroResult = true;
    } else if (this.result > 0) {
      this.positiveResult = true;
      this.negativeResult = false;
      this.zeroResult = false
    } else if (this.result < 0) {
      this.negativeResult = true;
      this.positiveResult = false;
      this.zeroResult = false
    }
  }

}
