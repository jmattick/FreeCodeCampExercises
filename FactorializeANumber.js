function factorialize(num) {
  var n = 1;
      for (i=1; i<=num; i++) {
    n *= i;
  }
 return n;
}

factorialize(5);