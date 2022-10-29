let persons=['Ranganath', 'Sachin', 'Anand'];

persons.forEach(function(person){
  console.log(person, person[0]);
})

/*Output
"Ranganath" "R"
"Sachin" "S"
"Anand" "A"
*/

//******************************

let numbers=[10,20,30,40,50];
let sum=0;

function add(number){
  sum+=number
}

numbers.forEach(add)
console.log(sum);  // 150

//******************************

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

images.forEach(function(image){
    areas.push(image.height*image.width);
})

console.log(areas)
