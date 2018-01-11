
function permAlone(str) {
  var regex = /(.)\1+/g;
  
  var arr = str.split('');
  var perm = [];
  var temp;
  
  //if all characters are same return 0
  if (str.match(regex) !== null && str.match(regex)[0] == str) { return 0;}
  
  function swap(i1, i2) {
    temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
  }
  
  function generate(int) {
    if (int === 0){
      perm.push(arr.join(''));
    } else {
      for (var i = 0; i != int; i++) {
        generate(int-1);
        swap(int%2?0:i, int-1);
      }
    }
  }
  
  generate(arr.length);
  
  var filtered = perm.filter(function(string){
    return !string.match(regex);
  });
  
  return filtered.length;
  
}

permAlone('aab');
