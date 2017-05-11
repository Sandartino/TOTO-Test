export class CombinatoricsFiveService {

  three(amountThree:number, userNumsLength:number) {
    var base = userNumsLength - 3;
    base = base * (base - 1);
    return amountThree * (base / 2);
  }

  four(amountFour:number, userNumsLength:number) {
    var three = function () {
      var C1 = (4 * 3 * 2) / 6;
      var baseC2 = userNumsLength - 4;
      var C2 = (baseC2 * (baseC2 - 1)) / 2;
      return amountFour * C1 * C2;
    }();

    return {
      three: three,
      four: amountFour * userNumsLength - 4,
    }
  }

  five(amountFive:number, userNumsLength:number) {
    var three = function () {
      var C1 = (5 * 4 * 3) / 6;
      var baseC2 = userNumsLength - 5;
      var C2 = (baseC2 * (baseC2 - 1)) / 2;
      return amountFive * C1 * C2;
    }();

    return {
      three: three,
      four: amountFive * 5 * (userNumsLength - 5),
      five: amountFive
    }
  }

}
