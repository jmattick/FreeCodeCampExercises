//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
function uniteUnique(arr) {
  var joined = [];
  for(var i=0;i<arguments.length;i++) {
    joined = joined.concat(arguments[i]);
  }
  
  var uniq = joined.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
 
  return uniq;
}
