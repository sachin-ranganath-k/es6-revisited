//****************************** CONST ********************************** */

const myName = "Sachin";
console.log(myName);
myName = "Ranganath";
console.log(myName); // TypeError: Assignment to constant variable.

// Property values can be modified in objects
const person = {
  name: "Rahul",
  age: 22,
  isPlaced: true,
};
console.log(person.name); // Rahul
person.name = "Rangnath";
console.log(person.name); // Rangnath

//****************************** LET ********************************** */

//Values can be reassigned using let
let Name = "Sachin";
console.log(Name);  //Sachin
Name = "Ranganath";
console.log(Name);  //Ranganath

let bike = {
  name: "Royal enfield",
  engine: "9988cc",
  type: "petrol",
};
console.log(bike.engine); // 9988cc

bike.engine = "7899 cc";
console.log(bike.engine); //7899cc


//************* Related to functions *****************/

function fun() {
  let a = 10;
  console.log(a);
}
console.log(a); //a is not defined.  let and const are is block scoped


function fun() {
  const a = 10;
  console.log(a);
}
console.log(a); //a is not defined.  let and const are is block scoped