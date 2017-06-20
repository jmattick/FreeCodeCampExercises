//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  // &colon;&rpar;

  var strArr=[];
  strArr = str.split('');
    
  for (var i =0; i<str.length; i++) {
     switch(strArr[i]) {
       case '"': strArr[i] = '&quot;';
         break;
       case "'": strArr[i] = '&apos;';
         break;
       case '>': strArr[i] = '&gt;';
         break;
       case '<': strArr[i] = '&lt;';
         break;
       case '&': strArr[i] = '&amp;';
         break;
     
     }
  }
  str = strArr.join('');

  return str;
  //return str;
}
