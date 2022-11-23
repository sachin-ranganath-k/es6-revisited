/*Applications of promise

Promises are used for asynchronous handling of events.
Promises are used to handle asynchronous http requests.
*/

const myPromise = new Promise(function (myResolve, myReject) {
  setTimeout(function () {
    myResolve("React js is an awesome UI library !!");
  }, 3000);
});
myPromise.then(function (value) {
  console.log(value);
});
myPromise.catch(function (value) {
  console.log("Error..!");
});

/****************************************************** */

var promise = new Promise(function (resolve, reject) {
  const x = "Sachin";
  const y = "K";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function () {
    console.log("Success, You are Sachin");
  })
  .catch(function () {
    console.log("Some error has occurred"); //Error.. Since x!==y
  });
