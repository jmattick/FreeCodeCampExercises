//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them./We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
  var a = Math.min(arr[0],arr[1]);
  var b = Math.max(arr[0],arr[1]);
  var sum=0;
  for (var i = a; i<=b; i++) {
    sum += i;
  }
  return sum;

}
  

sumAll([1, 4]);

