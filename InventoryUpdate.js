//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var arr3 =arr1;
  var arr4=[];
  var count = 0;
  var hitlist;
  var a;
  var b;
    for(var i = 0; i<arr2.length; i++){
      count = 0;
     for(var j = 0; j<arr1.length; j++){
       if (arr2[i][1]==arr1[j][1]){
         hitlist=i;
         a = arr1[j][0];
         b = arr2[i][0];
         arr3[j][0] = a+b;
         count=1;
      
       }
        
     }
      if(count ===0){
        arr3.push(arr2[i]);
      }
    }
    arr3.sort(function(a,b){
       return a[1]>b[1] ? 1:-1;
    });
    return arr3;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];


updateInventory(curInv, newInv);
