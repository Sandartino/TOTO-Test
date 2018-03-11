import {Injectable} from '@angular/core';
import {Http}       from '@angular/http';

@Injectable()
export class IterateShortService {
  systemData:Object;
  three:number;
  four:number;
  five:number;
  six:number;

  constructor(private http:Http) {
    http.get('../../assets/systems.json').subscribe(res => this.systemData = res.json());
  }

  iterate(gameType, userNums, selectedSystem, drawingNums) {
    var systemIndices = this.systemData[gameType][selectedSystem];
    var drawingNumsLength = 0;
    var systemIndex = 0;
    var userNum = 0;
    var three = 0;
    var currentThree = 0;
    var four = 0;
    var currentFour = 0;
    var five = 0;
    var currentFive = 0;
    var six = 0;
    var currentSix = 0;

    if (gameType === "535") {
      drawingNumsLength = 5;
    } else {
      drawingNumsLength = 6;
    }

    for (var p in drawingNums) {
      if (drawingNums.hasOwnProperty(p)) {

        for (var s in systemIndices) {
          if (systemIndices.hasOwnProperty(s)) {

            for (let i = 0; i < systemIndices[s].length; i++) {
              systemIndex = systemIndices[s][i] - 1;
              userNum = userNums[systemIndex];

              for (let k = 0; k < drawingNumsLength; k++) {
                if (userNum == drawingNums[p][k]) {
                  currentThree++;
                  currentFour++;
                  currentFive++;
                  currentSix++;
                  break;
                }
              }

            }

            if (currentThree === 3) {
              three++;
              currentThree = 0
            }
            else if (currentThree !== 3) {
              currentThree = 0
            }
            if (currentFour === 4) {
              four++;
              currentFour = 0;
            }
            else if (currentFour !== 4) {
              currentFour = 0;
            }
            if (currentFive === 5) {
              five++;
              currentFive = 0;
            }
            else if (currentFive !== 5) {
              currentFive = 0;
            }
            if (currentSix === 6) {
              six++;
              currentSix = 0;
            }
            else if (currentSix !== 6) {
              currentSix = 0;
            }
          }
        }
      }
    }

    this.three = three;
    this.four = four;
    this.five = five;
    this.six = six;

  }

}

