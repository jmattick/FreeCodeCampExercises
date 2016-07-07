function getIndexToIns(arr, num) {
  arr = arr.sort(function(a,b) {
    return a-b;
  });
  
  for (i=0; i < arr.length; i++) {
    if (arr[i] >= num && i!==arr.length) {
      return i;
    } else if (arr[i] <= num && i >= arr.length-1) {
      return i+1;
    }
  }
  
 
}

getIndexToIns([2, 5, 10], 15);