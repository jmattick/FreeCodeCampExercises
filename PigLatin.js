//Translate the provided string to pig latin.

function translatePigLatin(str) {
  var vowelkey = ["a", "e", "i", "o", "u"];
  var i=0;
  while(vowelkey.indexOf(str[i])===-1 && i<str.length) {
    i++;
  }
  
  if (i !== 0) {
  var con = str.substr(0,i);
  var vow = str.substr(i,str.length);
  str = vow + con + "ay";
  } else {
    str += "way";
  }
 
  return str;
}
