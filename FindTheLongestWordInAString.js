
function findLongestWord(str) {
  var arr = [];
  arr = str.split(' ');
  var arrNum = [];
  for (i=0; i<arr.length; i++) {
    arrNum.push(arr[i].length);
  }
  arrNum.sort(function(a,b) {
    return b-a;
  });
  
  return arrNum[0];
}

findLongestWord("The quick brown fox jumped over the lazy dog");