// function randomPassword(length) {
//   length = 8;
//   var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@##$%^&*()"
//   var password = "", character;
//   for (var i = 0, n = chars.length; i < length; ++i) {
//     password += chars.charAt(Math.floor(Math.random() * n))
//   };
//   return password;
// }

// console.log(randomPassword());

////////////////////////

//THIS ONE IS BROKEN. FIX THIS.

// function genPwd(pwdLength) {
//   var characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@##$%^&*()"
//   var password = "";
//   for (var i = 0; i < pwdLength; i++) {
//     var randomIndex = Math.floor(Math.random() * characterList);
//     password += characterList.charAt()
//   };
//   return password;
// }

// console.log(genPwd(6))

////////////////////////////

function genPwdAscii(pwdLength) {
  var password = "";
  for (var i = 0; i < pwdLength; i++) {
    var asciiCode = Math.floor(Math.random() * (126 - 33)) + 33;
    password += String.fromCharCode(asciiCode);
  };
  return password;
}

console.log(genPwdAscii(6));







