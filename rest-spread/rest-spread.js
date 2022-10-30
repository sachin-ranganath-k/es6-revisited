function validateitems(...items) {
  console.log(items); // ['Milk', 'Cashew', 'Badam']

  //Add Peanut if it doesn't exist

  if (items.indexOf("Peanut") < 0) {  //If Peanut doesn't exist
    return ["Peanut", ...items];
  }
  return items;
}

// validateitems("Milk", "Cashew", "Badam");
let fun = validateitems("Milk", "Cashew", "Badam");
console.log(fun); // [ 'Peanut', 'Milk', 'Cashew', 'Badam' ]


/************************************ */

function product(...data) {
  return data.reduce(function (acc, number) {
    return acc * number;
  }, 1);
}
console.log(product(2, 3, 4, 5, 6, 7, 8, 9));  // 362880


/**************************************** */
function join(array1, array2) {
    return [...array1,...array2];
  }
  
  console.log(join([1,2,3,4],[5,6,7,8]))


  /*************************************** */

  
  function unshift(array, ...rest) {
    //return [a, b, c, d, e].concat(array);
    return [...rest, ...array];
  }
  
 console.log(unshift([1,2,3,4],3,4,5,6,7)) //[3, 4, 5, 6, 7, 1, 2, 3, 4]