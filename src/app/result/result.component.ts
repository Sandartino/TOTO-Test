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
  positiveResult:boolean = false;
  negativeResult:boolean = false;
  zeroResult:boolean = false;
  @Input() priceForYear:number;
  @Input() three:number;
  @Input() four:number;
  @Input() five:number;

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
