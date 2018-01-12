
function pairwise(arr, arg) {
  var ind = 0;
  for (var i = 0; i<arr.length-1; i++) {
    for (var j= i+1; j<arr.length; j++) {
      if (arr[i]+arr[j] === arg ){
        ind = ind + i + j;
        arr[i] = arr[j] = "#";
        
      } 
    }
  }
  return ind;
}


pairwise([1, 3, 2, 4], 4);
