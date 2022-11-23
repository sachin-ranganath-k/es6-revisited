const details = {
  name: "Sachin",
  surName: "K",
  dept: "Web",
};

const { surName, name, dept } = details;  //Destructred elements can be in any order. But should be same as properties
console.log(`${name} ${surName} belongs to ${dept} department`); //Sachin K belongs to Web department

/**************************** */

const saveFile = {
  fileName: "destructure",
  extenstion: ".js",
  size: 2024,
};

function fileSummary({ fileName, extenstion, size },{color}) {
  console.log(`The file ${fileName}${extenstion} has size ${size} with icon color ${color}`); //The file destructure.js has size 2024
}
fileSummary(saveFile,{color:"green"});



//************* Old ES5 approach ******************/
let details2={
  name:"Sachin",
  surName:"K"
}

let myName=details.name;
const mySurname=details.surName;
console.log('My Name with surname is ',myName, mySurname)

//**************************************************** */

function dest(){
  let a={
    b:"c",
    d:"e"
  }
  console.log(a)
}
dest()