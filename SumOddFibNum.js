//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
  var prev=0;
  var curr=1;
  var result = 0;
  while (curr<=num) {
    if (curr%2 !==0) {
      result += curr;
    }
    
    curr = prev + curr;
    prev = curr-prev;
    
    
  }
  return result;
}
