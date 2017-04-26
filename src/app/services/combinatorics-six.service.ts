import {Injectable} from '@angular/core';

@Injectable()
export class CombinatoricsSixService {

  constructor() {
  }

  three(amountThree:number, userNumsLength:number) {
    var base = userNumsLength - 3;
    base = base * (base - 1) * (base - 2);
    return amountThree * (base / this.factorial(3));

  }

  four(amountFour:number, userNumsLength:number) {
    var three = function () {
      var C1 = (4 * 3 * 2) / this.factorial(3);
      var baseC2 = userNumsLength - 4;
      var C2 = (baseC2 * (baseC2 - 1) * (baseC2 - 2)) / this.factorial(3);
      return amountFour * C1 * C2;
    }();

    var four = function () {
      var base = userNumsLength - 4;
      return amountFour * ((base * (base - 1)) / 2)
    }();

    return {
      three: three,
      four: four
    }
  }

  five(amountFive:number, userNumsLength:number) {
    var three = function () {
      var C1 = (5 * 4 * 3) / this.factorial(3);
      var baseC2 = userNumsLength - 5;
      var C2 = (baseC2 * (baseC2 - 1) * (baseC2 - 2)) / this.factorial(3);
      return amountFive * C1 * C2;
    }();

    var four = function () {
      var C1 = (5 * 4 * 3 * 2) / this.factorial(4);
      var baseC2 = userNumsLength - 5;
      var C2 = (baseC2 * (baseC2 - 1)) / 2;
      return amountFive * C1 * C2;
    }();

    return {
      three: three,
      four: four,
      five: amountFive * (userNumsLength - 5)
    }
  }


  six(amountSix:number, userNumsLength:number) {
    var three = function () {
      var C1 = (6 * 5 * 4) / this.factorial(3);
      var baseC2 = userNumsLength - 6;
      var C2 = (baseC2 * (baseC2 - 1) * (baseC2 - 2)) / this.factorial(3);
      return amountSix * C1 * C2;
    }();

    var four = function () {
      var C1 = (6 * 5 * 4 * 3) / this.factorial(4);
      var baseC2 = userNumsLength - 6;
      var C2 = (baseC2 * (baseC2 - 1)) / 2;
      return amountSix * C1 * C2;
    }();

    return {
      three: three,
      four: four,
      five: amountSix * 6 * (userNumsLength - 6),
      six: amountSix
    }
  }

  factorial(n) {
    if (n == 0) {
      return 1
    } else {
      return n * this.factorial(n - 1);
    }
  }
}



