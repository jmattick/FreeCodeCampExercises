function mutation(arr) {
  var a = arr.splice(0,1);
  a = a[0].toLowerCase();
  var b = arr;
  b = b[0].toLowerCase();
  
  bArr= b.split('');
  var res= [];
  for (i=0; i< bArr.length; i++) {
     res.push(a.indexOf(b[i]) !==-1);
  }
  
  for (i=0; i< res.length; i++) {
    return res.indexOf(false) ===-1;
  }

}

mutation(["Hello", "Hey"]);