 
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var res = [];
  
  function getPeriod(obj) {
    var a = earthRadius + obj.avgAlt;
    var T =Math.round(2* Math.PI * Math.pow((Math.pow(a,3)/GM),1/2));
    delete obj.avgAlt;
    obj.orbitalPeriod = T;
    return obj;
  }
  
  for (var elem in arr){
    res.push(getPeriod(arr[elem]));
  }
  return res;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
