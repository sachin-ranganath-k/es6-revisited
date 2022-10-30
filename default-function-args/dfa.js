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
