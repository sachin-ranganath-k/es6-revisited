//Returns the value of the first element in the array where predicate is true,
//and undefined otherwise.

let info = [
  {
    name: "Sachin",
  },
  {
    name: "Ranganath",
  },
  {
    name: "Prakash",
  },
  {
    name: "Ranganath",
  },
];

//Old approach using for()
let found;
for (let i = 0; i < info.length; i++) {
  if (info[i].name === "Ranganath") {
    found = info[i];
    break;
  }
}
console.log(found); //{ name: 'Ranganath' }

//Using ES6 find()
let infoFound = info.find((personInfo) => {
  // if(personInfo.name==="Ranganath"){
  //     return true;   //{ name: 'Ranganath' }... return fasle; -> undefined
  // }
  return personInfo.name === "Ranganath"; // { name: 'Ranganath' }
});

console.log(infoFound); //{ name: 'Ranganath' }



