const user={
    name:"Ranganath",
    email:"ranganath@gmail.com",
    dob:"1/1/1909",
    password:"1234567890"
}

function createUser({email,name,password,dob}) //Destructured can be in any order
{
    console.log(name)  //Ranganath
    console.log(email) //ranganath@gmail.com
}

createUser(user);



/**************************** */

const points = [
  [4, 5],
  [10, 20],
  [50, 60],
];

let result = points.map(([x, y]) => {
  return { x, y };
});

console.log(result)  //[ { x: 4, y: 5 }, { x: 10, y: 20 }, { x: 50, y: 60 } ]


/**************************************************** */

const profile = {
    title: 'Engineer',
    department: 'Engineering'
  };
  
const showResult = function isEngineer({title, department}) {
      return title === 'Engineer' && department === 'Engineering';
  }

console.log(showResult(profile))  //output-> true



/******************************************************* */

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
  const classesAsObject = classes.map(([subject, time, teacher]) => {
      return ({subject, time, teacher});
  });
  
  console.log(classesAsObject);

  /*
  [
  { subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick' },
  { subject: 'Physics', time: '10:15AM', teacher: 'Mrs. Lithun' },
  { subject: 'Math', time: '11:30AM', teacher: 'Mrs. Vitalis' }
]
*/



/***************************************************************** */

const numbers = [1, 2, 3];
let finalResults = [];

function double(numbers) {    
    const [ number, ...rest ] = numbers;
    if(number === undefined) {
        return finalResults;
    } else {
        finalResults.push(number*2);
        return double([...rest]);
    } 
}

console.log(finalResults);