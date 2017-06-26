//Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
function findElement(arr, func) {
  var num = 0;
  for (var i=0; i<arr.length; i++) {
    if (func(arr[i])===true) {
      num = arr[i];
      break;
    } else if (func(arr[i])===false&&i-1<arr.length) {
      num=undefined;
    }
  }
  return num;
}
