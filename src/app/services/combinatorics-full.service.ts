export class CombinatoricsFullService {

  combinations(userNums:number, gameNums:number) {
    var n = this.factorial(userNums);
    var k = this.factorial(gameNums);
    var subtraction = userNums - gameNums;
    var subtractionF = this.factorial(subtraction);
    return n / (k * subtractionF);
  }

  factorial(n) {
    if (n == 0) {
      return 1
    } else {
      return n * this.factorial(n - 1);
    }
  }

}
