class MySqrt {
  //Newton's Method
  solve(x) {
    return binarySearchIntuition(x);
  }
}

function binarySearchIntuition(x){
  if (x < 2) return x;
  let left = 2;
  let right = x;
  let mid = 0;
  let num = 0;
  while (left <= right) {
    mid = Math.floor(left + (right - left) / 2);
    num = mid * mid;

    // TODO Compute the mid, and the number as the mid*mid
    
  }

  // TODO Return the right
  
}

module.exports = { Problem: MySqrt };
