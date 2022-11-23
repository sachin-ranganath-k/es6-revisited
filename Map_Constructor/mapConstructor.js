// Create a Map
// A map holds key-value pair  where the key can be of any datatype.
// Map always remembers the original order of the key
//Map has a property that can represents the size of the map
// new Map(), set(adding and modifying the values),get(it return the value of the givent key)
//keys() ,values(),has() ,entries()


const studentNames = new Map([
  [100, "Sachin"],
  [120, "Ranganath"],
  ["SCIENCE_001", "Anand"],
]);

/* set :  Adds a new element with a specified key and value to the Map. 
        If an element with the same key already exists, the element will be updated. 
*/
studentNames.set("CS_002", "Kiran"); //Adding new entry
studentNames.set("CS_002", "Nagaraj");

console.log(studentNames.get(100)); //Sachin

console.log(studentNames.get("SCIENCE_001"));

// console.log(studentNames.get("CS_002")) //Earlier Kiran. Since we have added new entry using set()
console.log(studentNames.get("CS_002")); //Later Nagaraj. Since we have set CS_002 to Nagaraj. Previous value updated

console.log(studentNames.entries());
/*[Map Entries] {
  [ 100, 'Sachin' ],
  [ 120, 'Ranganath' ],
  [ 'SCIENCE_001', 'Anand' ],
  [ 'CS_002', 'Nagaraj' ]
}
*/

result = "";
for (i of studentNames.entries()) {
  result += i;
}
console.log(result); //100,Sachin120,RanganathSCIENCE_001,AnandCS_002,Nagaraj

console.log(studentNames.size); //4

console.log(studentNames.delete(120)) //Key 120 will be deleted. Returns true if deleted

console.log(studentNames.size); //3 Since 120 key deleted

console.log(studentNames.has(100))  // Returns true if key exists
console.log(studentNames.has(120))  //Returns false. Since 120 key deleted at line 37

console.log(studentNames.keys())

console.log(studentNames.values())