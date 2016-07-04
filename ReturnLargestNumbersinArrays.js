function largestOfFour(arr) {
  var arr2=[];
  for (i=0; i<4; i++) {
    arr[i].sort(function(a,b) {
      return b-a;
    });
  }
  for (i=0; i<4; i++) {
    arr2.push(arr[i][0]);
  }
  return arr2;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);