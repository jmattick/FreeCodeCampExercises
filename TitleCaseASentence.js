function titleCase(str) {
  str = str.toLowerCase();
  var arr1 = [];
  arr1 = str.split(' ');
  var arr2 = [];
  for (i=0; i<arr1.length; i++) {
    arr2.push(arr1[i].split(''));
  }
  var arrUp = [];
  for (i=0; i<arr2.length; i++) {
    arr2[i][0]= arr2[i][0].toUpperCase();
    var a = arr2[i].join('');
    arrUp.push(a);
  }
  arrUp = arrUp.join(' ');
  return arrUp;
}

titleCase("I'm a little tea pot");