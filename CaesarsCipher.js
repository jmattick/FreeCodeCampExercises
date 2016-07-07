function rot13(str) { // LBH QVQ VG!
  // limits: a = 65 and z=90
  
  var a = [];
  for (i=0; i<str.length; i++) {
    a.push(str.charCodeAt(i));
  }
  var dec=[];
  var b = [];
  for (i=0; i< a.length; i++) {
    if (a[i] <65 || a[i]>90) {
      b[i] = (a[i]);
    }else if (a[i] <78 ) {
      b[i] = (a[i]+13);
    } else {
      b[i] = (a[i]-13);
    }
    
   
  }
  
  for (i=0; i<b.length; i++) {
  dec.push(String.fromCharCode(b[i]));
    
  }
  
  
  dec = dec.join('');
  
  return dec;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC!");