//try/catch block handles errors. 

// try {
//   console.log(thishasnoreference);
// } catch (err) {
//   console.log(err);
// }

// console.log("im code after the try block");


// write function that randomly returns whether request was succesful
function sendResponse() {
  var success = Math.random();
  if(success < .5) {
    return {
      data: {
        username: "BetDev29",
        email: "betdev29@dev.com"
      }
    }
  } else {
    //throw creates an error
    throw "THIS IS AN ERROR"
  }
}

//write function that handles the response from the request.
function login() {
  try {
    var data = sendResponse();
    console.log(data);
  } catch(err) {
      console.log(err);
  }
}
login();

