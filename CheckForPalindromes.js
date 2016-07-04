function palindrome(str) {
  
  var modStr = str.replace(/\W/g, '').replace(/_/g, '').toLowerCase();
  var revStr = modStr.split('').reverse().join('');
  /*if (modStr == revStr) {
    return true;
  } */
  return modStr == revStr;
  
}



palindrome("eye");