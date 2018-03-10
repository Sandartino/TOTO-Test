import {Component, ViewChild} from '@angular/core';
import {Http}                 from '@angular/http';
import {IterateShortService}  from "../services/iterate-short.service";
import {IterateFullService}   from "../services/iterate-full.service";
import {InfoService}          from "../services/info.service";
import {ClearDirective}       from "../directives/clear.directive";

@Component({
  selector: 't-t649',
  templateUrl: './t649.component.html',
  providers: [IterateShortService, IterateFullService, InfoService]
})
export class T649Component {
  gameType = 6;
  userNums = [];
  lastSelectNum;
  drawingNums:Object;
  numbersCountToSelect:number = 8;
  currentCountSelect:number = 0;
  inShortCombining:boolean = true;
  selectSystem:string[] = ['1'];
  guaranty:string = '3/3';
  price:string = '3.40';
  priceForYear:number = 0;
  combinations:number = 4;
  selectedYear = '2017';
  years = ['2017', '2016', '2015', '2014'];
  three:number = 0;
  four:number = 0;
  five:number = 0;
  six:number = 0;

  @ViewChild(ClearDirective) clearDirective:ClearDirective;

  constructor(private iterateShortService:IterateShortService,
              private iterateFullService:IterateFullService,
              private infoService:InfoService,
              private http:Http) {
    http.get('./src/app/data/drawing-649.json').subscribe(res => this.drawingNums = res.json());
  }

  iterate() {
    if (this.inShortCombining) {
      if (this.currentCountSelect < this.numbersCountToSelect) {
        alert('Избрали сте по-малко числа');
        return;
      }
      this.iterateShortService.iterate(
        "642/9",
        this.userNums.sort(this.sortNumbers),
        this.selectSystem[0],
        this.drawingNums[this.selectedYear]
      );
      this.three = this.iterateShortService.three;
      this.four = this.iterateShortService.four;
      this.five = this.iterateShortService.five;
      this.six = this.iterateShortService.six;
    } else {
      if (this.currentCountSelect < this.gameType) {
        alert('Избрали сте по-малко числа');
        return;
      }
      this.iterateFullService.iterate(6, this.userNums, this.drawingNums, this.selectedYear);
      this.three = this.iterateFullService.three;
      this.four = this.iterateFullService.four;
      this.five = this.iterateFullService.five;
      this.six = this.iterateFullService.six;
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
    if (!this.inShortCombining) {
      return
    }
    this.numbersCountToSelect = this.infoService.get('642/9', this.selectSystem[0], 'selectNumbers');
    this.combinations = this.infoService.get('642/9', this.selectSystem[0], 'combinations');
    this.guaranty = this.infoService.guaranty('642/9', this.selectSystem[0], 'guaranty');
    this.price = String((this.combinations * 0.85).toFixed(2));
    this.priceForYear = this.infoService.forYear(this.selectedYear, this.combinations * 0.85)
  }

  isInShortCombining() {
    this.inShortCombining = !this.inShortCombining;
    if (this.inShortCombining) {
      this.combinations = this.infoService.get('642/9', this.selectSystem[0], 'combinations');
      this.price = String((this.combinations * 0.85).toFixed(2));
      this.priceForYear = this.infoService.forYear(this.selectedYear, this.combinations * 0.85)
    } else {
      this.price = '0';
      this.combinations = 0;
      this.priceForYear = 0;
    }
  }

  onShortCombining() {
    this.userNums = [];
    this.currentCountSelect = 0;
    this.price = String((this.combinations * 0.85).toFixed(2));
  }

  onFullCombining(value:number) {
    this.combinations = value;
    this.price = String((value * 0.85).toFixed(2));
    this.priceForYear = this.infoService.forYear(this.selectedYear, this.combinations * 0.85)
  }

  clear() {
    this.clearDirective.clear();
    this.userNums = [];
    this.currentCountSelect = 0;
    this.three = 0;
    this.four = 0;
    this.five = 0;
    this.six = 0;
  }

  clearFullCombining(inShortCombining:boolean) {
    if (!inShortCombining) {
      this.combinations = 0;
      this.price = '0';
      this.priceForYear = 0;
    }
  }

}
