//for-in loop returns key and for-of returns value

let a = [1, 2, 3];
for (let i in a) {
  console.log(a[i]);
}

let b = [11, 12, 13];
for (let i of b) {
  console.log(i);
}

let c = { name: "Sachin", company: "Cognizant" };
//For objects, we can't use forof loop
for (let x of c) {
  console.log(x); //TypeError : c is not iterable
}

let d = { name: "Sachin", company: "Cognizant" };
//For objects we can't use forof loop
for (let x in d) {
  console.log(d[x]); //x returns properties of object. name,company
}
