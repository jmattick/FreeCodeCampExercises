function confirmEnding(str, target) {
  var tL = target.length;
  var last = str.substr(-tL);
  
  return last == target;
}

confirmEnding("Bastian", "n");