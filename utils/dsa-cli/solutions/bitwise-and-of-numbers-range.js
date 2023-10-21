function rangeBitwiseAnd(m, n) {
    while (m < n) {
      // Turn off the rightmost 1-bit in n
      n = n & (n - 1);
    }
    return m & n;
  }  