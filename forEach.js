let persons=['Ranganath', 'Sachin', 'Anand'];

persons.forEach(function(person){
  console.log(person, person[0]);
})

/*Output
"Ranganath" "R"
"Sachin" "S"
"Anand" "A"
*/


let numbers=[10,20,30,40,50];
let sum=0;

function add(number){
  sum+=number
}

numbers.forEach(add)
console.log(sum);  // 150
