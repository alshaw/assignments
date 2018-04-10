//PROMISES
// a promise is an object
//3 states fo a promise
//resolved
//rejected
//pending

const getCoffee = new Promise((resolved, rejected) => {
  let coffee;
  let failureMsg;
  setTimeout(() => {
    let success = Math.random() < .5;
    if (success) {
      coffee = "Coffee is ready!";
      resolved(coffee);
    } else {
      failureMsg = "Coffee failed"
      rejected(failureMsg);
    }
  }, 3000);
});

getCoffee
  .then(coffee => console.log(coffee),
    failureMsg => console.log(failureMsg));