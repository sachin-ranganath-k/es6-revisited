//Returns the index of the first element which meets the condition

const numbers = [4, 9, 16, 25, 29];
console.log("First number over 18 has index " + numbers.findIndex(myFunction)); //3     25 has index 3

function myFunction(value, index, array) {
  return value > 18;
}
