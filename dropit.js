//Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

//The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

//Return the rest of the array, otherwise return an empty array.

function dropElements(arr, func) {
  // Drop them elements.
  var max = arr.length;
  for (var i = 0; i < max; i++) {
    if (func(arr[0])===false) {
      arr.shift();
    }
    if ((i-1)===max) {
      arr = [];
    }
  }
  return arr;
}
