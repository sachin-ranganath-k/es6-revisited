let empName = "Sachin";
let company = "Google";

let details = {
  empName,
  company,
};

console.log(details.empName, details.company); //Sachin Google


/**************************************** */


let firstName = "Ranganath";
let lastName = "K";

let info = {
  firstName,
  lastName,
  dept(x) {
    console.log(`Your department is ${x}`);
  },
};

console.log(info.dept("Web")); //Your department is Web
