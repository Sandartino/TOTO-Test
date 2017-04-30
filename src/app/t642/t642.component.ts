import {Component        } from '@angular/core';
import {UserNumsDirective} from './../directives/user-nums.directive';
import {IterateShortService}    from "../services/iterate-short.service";
import {Http}              from '@angular/http';
import {Year}              from "../classes/year";

@Component({
  selector: 't-t642',
  templateUrl: './t642.component.html',
  styleUrls: ['./t642.component.css'],
  providers: [IterateShortService]
})
export class T642Component {
  /*userNums = [];
  lastSelectNum;
  drawingNums:Object;
  numbersCountToSelect:number = 7;
  currentCountSelect:number = 0;
  inShortCombining:boolean = true;
  selectSystem:string[] = ['1'];
  selectedYear:Year = new Year('2014', '2014');
  three:number = 0;
  four:number = 0;
  five:number = 0;
  years = [
    new Year('2014', '2014'),
    new Year('2015', '2015'),
    new Year('2016', '2016')
  ];

  @ViewChild(ClearDirective) clearDirective:ClearDirective;

  constructor(private iterateShortService:IterateShortService,
              private iterateFullService:IterateFullService,
              private http:Http) {
    http.get('./src/app/data/drawing-535.json').subscribe(res => this.drawingNums = res.json());
  }


  iterate() {
    if (this.inShortCombining) {
      this.iterateShortService.iterate(
        "535",
        this.userNums.sort(this.sortNumbers),
        this.selectSystem[0],
        this.drawingNums[this.selectedYear.value]
      );
      this.three = this.iterateShortService.three;
      this.four = this.iterateShortService.four;
      this.five = this.iterateShortService.five;
    } else {
      this.iterateFullService.iterate(5, this.userNums, this.drawingNums, this.selectedYear.value);
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
    this.numbersCountToSelect = this.iterateShortService.systemData['535']['options'][this.selectSystem[0]]['selectNumbers'];
    // this.numbersCountToSelect = 0;
  }


  isInShortCombining():Boolean {
    this.userNums = [];
    this.currentCountSelect = 0;
    return this.inShortCombining = !this.inShortCombining;
  }


  clear() {
    this.clearDirective.clear();
    this.userNums = [];
    this.currentCountSelect = 0;
    this.three = 0;
    this.four = 0;
    this.five = 0;
  }*/

}
