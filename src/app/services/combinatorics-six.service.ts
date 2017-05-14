export class CombinatoricsSixService {

  three(amountThree:number, userNumsLength:number) {
    var base = userNumsLength - 3;
    base = base * (base - 1) * (base - 2);
    return amountThree * (base / 6);
  }

  four(amountFour:number, userNumsLength:number) {
    var three = function () {
      var C1 = (4 * 3 * 2) / 6;
      var baseC2 = userNumsLength - 4;
      var C2 = (baseC2 * (baseC2 - 1) * (baseC2 - 2)) / 6;
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
      var C1 = (5 * 4 * 3) / 6;
      var baseC2 = userNumsLength - 5;
      var C2 = (baseC2 * (baseC2 - 1) * (baseC2 - 2)) / 6;
      return amountFive * C1 * C2;
    }();

    var four = function () {
      var C1 = (5 * 4 * 3 * 2) / 24;
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
      var C1 = (6 * 5 * 4) / 6;
      var baseC2 = userNumsLength - 6;
      var C2 = (baseC2 * (baseC2 - 1) * (baseC2 - 2)) / 6;
      return amountSix * C1 * C2;
    }();

    var four = function () {
      var C1 = (6 * 5 * 4 * 3) / 24;
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

}



