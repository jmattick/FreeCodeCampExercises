//Return an English translated sentence of the passed binary string.


function binaryAgent(str) {
  var res = str.split(" ");
  var test = "";
  for (var i =0; i<res.length; i++) {
  test += String.fromCharCode(parseInt(res[i],2));
  }
  return test;
}
