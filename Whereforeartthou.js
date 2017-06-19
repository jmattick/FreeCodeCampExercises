//Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {

  var keys = Object.keys(source);
 
  return collection.filter(function(word){
  for( i=0; i<keys.length; i++) {
    if(!word.hasOwnProperty(keys[i])|| word[keys[i]] !== source[keys[i]]) {
      return false;
    }
   
  }
    return true;
  });
  
}
