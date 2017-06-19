//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
function pairElement(str) {
  var key = {
    A:"T",
    C:"G", 
    T:"A", 
    G:"C", 
  };
  var ssDNA=[];
  ssDNA = str.split('');
  var comb=[];
  for (i=0; i<str.length; i++) {
    comb[i] = [ssDNA[i], key[ssDNA[i]]];
  }
  return comb;
}
