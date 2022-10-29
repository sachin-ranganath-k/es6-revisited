//Loops through the array and created the new array, without affecting old array

//**************************

let numbers=[20,30,10,50];

let returnedNumbers=numbers.map(function(number){
    return number*3;
})
console.log(numbers); //[20, 30, 10, 50]
console.log(returnedNumbers); // [60, 90, 30, 150]



//*************************
let info=[
    {
        "firstName":"Sachin",
        "lastName": "K"
    },
    {
        "firstName":"Basu",
        "lastName":"S"
    }
]

//Return only lastNames of persons
let returnedInfo=info.map((infoMap)=>{
    return infoMap.lastName;
})
console.log(returnedInfo); // ['K', 'S' ]


//*****************************

var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];
  
  var heights=images.map((heightt)=>{
      return heightt.height;
  })
console.log(heights)  // ['34px', '54px', '83px']



//***************************

var trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
  ];
  
  var speeds=trips.map((trip)=>{
      return (trip.distance/trip.time);
  })
  
  console.log(speeds)     // [ 3.4, 1.8, 2.36 ]
  console.log(speeds[0]) // 3.4