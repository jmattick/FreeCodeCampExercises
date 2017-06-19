//Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
function fearNotLetter(str) {
  
  for (i=0; i<str.length; i++) {
    if(str.charCodeAt(i+1)-str.charCodeAt(i) !== 1 && i !== (str.length - 1)) {
      var ccode = str.charCodeAt(i) + 1;
      return String.fromCharCode(ccode); 
    } 
  }
}
