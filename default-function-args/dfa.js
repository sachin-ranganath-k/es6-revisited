//If we won't pass any parameter, it takes the default assigned parameter
//If we pass parameter, it overwrites the default parameter with passed parameter

function showResult(name, gender = "Male") {
  console.log(`Your Name is ${name} and gender ${gender}`);
}

showResult("Sachin"); //Your Name is Sachin and gender Male
showResult("Sachin", undefined); //Your Name is Sachin and gender Male
showResult("Alice", "Female"); //Your Name is Alice and gender Female

/****************************************** */

function User(id) {
  this.id = id;
}

function generateId() {
  return Math.ceil(Math.random() * 9999);
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;
  return user;
}

console.log(createAdminUser()); // User { id: 9545, admin: true }




//***************** Old ES5 Approach ********************/

function add(a, b) {
  return a + b;
}
console.log(add(2, 1));
console.log(add(2)); // NaN (2 + undefined is NaN(not a number))


//Solving the above problem
function add(a, b) {
  b = (typeof b !== "undefined" ? b : 1);
  return a + b;
}
console.log(add(2, 1));  //3
console.log(add(2));  //3
