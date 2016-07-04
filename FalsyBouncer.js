function bouncer(arr) {

  var res = arr.filter(Boolean);
  return res;
}

bouncer([7, "ate", "", false, 9]);