import {Component, ViewChild} from '@angular/core';
import {IterateShortService}  from '../services/iterate-short.service';
import {IterateFullService}   from '../services/iterate-full.service';
import {InfoService}          from '../services/info.service'
import {Http}                 from '@angular/http';
import {ClearDirective}       from "../directives/clear.directive";

@Component({
  selector: 't-t535',
  templateUrl: './t535.component.html',
  providers: [IterateShortService, IterateFullService, InfoService]
})
export class T535Component {
  gameType = 5;
  userNums = [];
  lastSelectNum;
  drawingNums:Object;
  numbersCountToSelect:number = 7;
  currentCountSelect:number = 0;
  inShortCombining:boolean = true;
  selectSystem:string[] = ['1'];
  guaranty:string = '4/4';
  price:string = '4.50';
  priceForYear:number = 468;
  combinations:number = 9;
  selectedYear:string = '2016';
  years = ['2016', '2015', '2014'];
  three:number = 0;
  four:number = 0;
  five:number = 0;

  @ViewChild(ClearDirective) clearDirective:ClearDirective;

  constructor(private iterateShortService:IterateShortService,
              private iterateFullService:IterateFullService,
              private infoService:InfoService,
              private http:Http) {
    http.get('./src/app/data/drawing-535.json').subscribe(res => this.drawingNums = res.json());
  }

  iterate() {
    if (this.inShortCombining) {
      if (this.currentCountSelect < this.numbersCountToSelect) {
        alert('Избрали сте по-малко числа');
        return;
      }
      this.iterateShortService.iterate(
        "535",
        this.userNums.sort(this.sortNumbers),
        this.selectSystem[0],
        this.drawingNums[this.selectedYear]
      );
      this.three = this.iterateShortService.three;
      this.four = this.iterateShortService.four;
      this.five = this.iterateShortService.five;
    } else {
      if (this.currentCountSelect < this.gameType) {
        alert('Избрали сте по-малко числа');
        return;
      }
      this.iterateFullService.iterate(5, this.userNums, this.drawingNums, this.selectedYear);
      this.three = this.iterateFullService.three;
      this.four = this.iterateFullService.four;
      this.five = this.iterateFullService.five;
      this.iterateFullService.reset()
    }

  }

  sortNumbers(a, b) {
    return a - b;
  }

  onUserNums() {
    if (this.inShortCombining) {
      var maxSelectNotReach = this.userNums.length <= this.numbersCountToSelect;
      this.lastSelectNum = this.userNums[this.userNums.length - 1];
      if (maxSelectNotReach) {
        this.currentCountSelect = this.userNums.length;
      } else {
        if (this.userNums.includes(this.lastSelectNum)) {
          var index = this.userNums.indexOf(this.lastSelectNum);
          this.userNums.splice(index, 1);
        }
      }
    } else {
      this.currentCountSelect = this.userNums.length
    }
  }

  onSystem() {
    this.numbersCountToSelect = this.infoService.get('535', this.selectSystem[0], 'selectNumbers');
    this.combinations = this.infoService.get('535', this.selectSystem[0], 'combinations');
    this.guaranty = this.infoService.guaranty('535', this.selectSystem[0], 'guaranty');
    this.price = String((this.combinations * 0.50).toFixed(2));
    this.priceForYear = this.infoService.forYear(this.selectedYear, this.combinations * 0.50)
  }

  isInShortCombining() {
    this.inShortCombining = !this.inShortCombining;
    if (this.inShortCombining) {
      this.combinations = this.infoService.get('535', this.selectSystem[0], 'combinations');
      this.price = String((this.combinations * 0.50).toFixed(2));
      this.priceForYear = this.infoService.forYear(this.selectedYear, this.combinations * 0.50)
    } else {
      this.price = '0';
      this.combinations = 0;
      this.priceForYear = 0;
    }
  }

  onShortCombining() {
    this.userNums = [];
    this.currentCountSelect = 0;
    this.price = String((this.combinations * 0.50).toFixed(2));
  }

  onFullCombining(value:number) {
    this.combinations = value;
    this.price = String(value * 0.50);
    this.priceForYear = this.infoService.forYear(this.selectedYear, this.combinations * 0.50)
  }

  clear() {
    this.clearDirective.clear();
    this.userNums = [];
    this.currentCountSelect = 0;
    this.three = 0;
    this.four = 0;
    this.five = 0;
  }

  clearFullCombining(inShortCombining:boolean) {
    if (!inShortCombining) {
      this.combinations = 0;
      this.price = '0';
      this.priceForYear = 0;
    }
  }

}
