class TrailingZeroes {
    trailingZeroes(n) {
      let zeroCount = 0;
      let currentMultiple = 5;
      while (n > 0) {
        n = Math.floor(n / 5);
        zeroCount += n;
      }
      return zeroCount;
    }
  }
  
  module.exports = { Problem: TrailingZeroes };
  