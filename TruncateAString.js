function truncateString(str, num) {
  var sub;
  if (num <=3) {
    sub = str.substr(0, num);
    sub = sub + "...";
  }else if (num < str.length) {
	sub = str.substr(0, num-3);
	sub = sub + "...";
  } else if (num >= str.length) {
    return str;
  }
 
  return sub;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);