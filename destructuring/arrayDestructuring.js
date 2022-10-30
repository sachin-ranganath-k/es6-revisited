const languages=['C','C++', 'PHP', 'Javascript']

const [lang1, lang2, lang3]=languages;
console.log(lang2); // C++  (string)
console.log(typeof(lang4));  // undefined


/***************************************** */

const IndianLanguages=['Kannanda','Tamil', 'Telugu', 'Malayalam']
const [langg1, ...rest]=IndianLanguages;   
console.log(rest)  // [ 'Tamil', 'Telugu', 'Malayalam' ]
console.log(langg1) // Kannada

/******************************************* */

const bikes=['Hero','Honda','Yamaha','Duke']
// const [...restOfBikes, bike3]=bikes;  // Error : A rest element must be last in a destructuring pattern

const [bike3, ...restOfBikes]=bikes;
console.log('ttt',restOfBikes) //ttt [ 'Honda', 'Yamaha', 'Duke' ]

const[bike4,bike5, bike6,bike7,...restOfBikes2]=bikes
console.log('yyy',restOfBikes2) // [] (Blank Array)



