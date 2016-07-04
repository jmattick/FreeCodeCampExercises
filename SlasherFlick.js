function slasher(arr, howMany) {
  var slashed = arr.splice(howMany);
  return slashed;
}

slasher([1, 2, 3], 2);