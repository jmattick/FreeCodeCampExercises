//Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {

  
  var res = [];
  var flatten = function(arg) {
    if(!Array.isArray(arg)) {
      res.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };
  
  arr.forEach(flatten);
  return res;
  
  
  
  
}
