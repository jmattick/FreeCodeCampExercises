function repeatStringNumTimes(str, num) {
  if (num > 0) {
    var a = "";
    for (i=1; i<= num; i++) {
      a += str;
    }
    return a;
  } else {
    return '';
  }
}

repeatStringNumTimes("abc", 3);