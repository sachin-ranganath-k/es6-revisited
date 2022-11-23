//javascript set is collection of unique values
//each value can occur once in set collection
//it can hold any value of any datatype.
// new Set(), add(),delete(),has(),clear(),size
// keys() method works same as values()

//Ignores duplicate values

//Methods : new Set(),add(),delete,clear,has,keys(),values(),entries()

/*
1.	Set.prototype.add(value)    :	It appends a new element to the given value of the set object.
2.	Set.prototype.clear()       :	It removes all the elements from the set object.
3.	Set.prototype.delete(value) : 	It removes the element which is associated with the corresponding value.
4.	Set.prototype.entries()	    :   It returns a new iterator object, which contains an array of each element in the Set object in insertion order.
5.	Set.prototype.forEach(callbackFn[, thisArg]) :	It executes the callback function once.
6.	Set.prototype.has(value) :	This method returns true when the passed value is in the Set.
7.	Set.prototype.values() :	It returns the new iterator object, which contains the values for each element in the Set, in insertion order.
*/

//create a set
const letters = new Set(["a", "b", "c", "b"]);
console.log(letters); //Set(3) { 'a', 'b', 'c' }

// for of loop or forEach loop to view the values
const letters2 = new Set(["a", "b", "c", "b"]);
//list all entries
const loops = letters.entries();
let text = "";
for (const i of loops) {
  text += i;
}
console.log(text); // a,a b,b c,c  Keys will be same as values in Set()


const values = new Set([1, 2, 3, 4, 5, 4, 3, 6, 7]);
let result = "";
for (let i of values) {
  result += i + ",";
}
console.log(result); //1,2,3,4,5,6,7

/************************ Using Set() and rest ************ */

function show(...a) {
  const data = new Set(a);
  for (let i of data) {
    console.log(i); // 1,2,3,4,5
  }
}
show(1, 2, 3, 4, 5, 3, 4, 3, 2, 1);



// *********   Display data using forEach() - Easy way ****************

let colors = new Set(["Green", "Red", "Orange", "Yellow", "Red"]);
colors.add("Violet");
colors.add("Indigo");
colors.add("Blue");
colors.add("Violet");
function details(valuess) {
  console.log(valuess);
}
colors.forEach(details); // forEach() callback should be a function
