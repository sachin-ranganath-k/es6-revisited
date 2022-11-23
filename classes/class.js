class Vehicle {
  constructor(name, engine) {
    this.name = name;
    this.engine = engine;
  }

  //class can have only one constructor
  //   constructor(name, engine, originCountry) {
  //     this.name = name;
  //     this.engine = engine;
  //     this.originCountry=originCountry
  //   }
}

const bike = new Vehicle("Royal Enfield", "998cc");
const car = new Vehicle("Honda city", "6779cc", "India"); //"India" will be ignored
console.log(bike.name); // Royal Enfiled
console.log(bike); //Vehicle { name: 'Honda city', engine: '6779cc' }   India" will be ignored

console.log(car);
