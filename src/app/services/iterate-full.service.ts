import {CombinatoricsFiveService} from "./combinatorics-five.service";
import {CombinatoricsSixService}  from "./combinatorics-six.service";
import {Injectable}               from '@angular/core';

@Injectable()
export class IterateFullService {
  three:number = 0;
  four:number = 0;
  five:number = 0;
  six:number = 0;

  constructor(private combinatoricsFiveService:CombinatoricsFiveService,
              private combinatoricsSixService:CombinatoricsSixService) {
  }

  iterate(gameType:number, userNums, drawingNums:Object, year) {
    drawingNums = drawingNums[year];
    var drawingNumsLength = gameType;
    var three = 0;
    var four = 0;
    var five = 0;
    var six = 0;
    var currentThree = 0;
    var currentFour = 0;
    var currentFive = 0;
    var currentSix = 0;

    for (var p in drawingNums) {
      if (drawingNums.hasOwnProperty(p)) {

        for (var i = 0; i < drawingNumsLength; i++) {

          for (var k = 0; k < userNums.length; k++) {
            if (drawingNums[p][i] === userNums[k]) {
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

    if (gameType === 5) {
      if (three > 0) {
        this.three = this.combinatoricsFiveService.three(three, userNums.length)
      }
      if (four > 0) {
        this.three += this.combinatoricsFiveService.four(four, userNums.length).three;
        this.four = this.combinatoricsFiveService.four(four, userNums.length).four
      }
      if (five > 0) {
        this.three += this.combinatoricsFiveService.five(five, userNums.length).three;
        this.four += this.combinatoricsFiveService.five(five, userNums.length).four;
        this.five = this.combinatoricsFiveService.five(five, userNums.length).five
      }
    } else if (gameType === 6) {
      if (three > 0) {
        this.three = this.combinatoricsSixService.three(three, userNums.length)
      }
      if (four > 0) {
        this.three += this.combinatoricsSixService.four(four, userNums.length).three;
        this.four = this.combinatoricsSixService.four(four, userNums.length).four
      }
      if (five > 0) {
        this.three += this.combinatoricsSixService.five(five, userNums.length).three;
        this.four += this.combinatoricsSixService.five(five, userNums.length).four;
        this.five = this.combinatoricsSixService.five(five, userNums.length).five
      }
      if (six > 0) {
        this.three += this.combinatoricsSixService.six(six, userNums.length).three;
        this.four += this.combinatoricsSixService.six(six, userNums.length).four;
        this.five += this.combinatoricsSixService.six(six, userNums.length).five;
        this.six = this.combinatoricsSixService.six(six, userNums.length).six;
      }
    }

  }

  reset() {
    this.three = 0;
    this.four = 0;
    this.five = 0;
    this.six = 0;
  }

}
