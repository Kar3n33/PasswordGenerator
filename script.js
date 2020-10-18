// Assignment Code
var generateBtn = document.querySelector("#generate");

var charset01 = "!@#$%^&*/?!@#$%^&*;:'{}|?~`";
var charset02 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charset03 = "abcdefghijklmnopqrstuvwxyz";
var charset04 = "012345678910";


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Password Criteria Prompt Questions
function generatePassword() {
 var passwordLength = prompt("Choose a password length of at least 8 and no more than 128 characters");
  alert("The number of characters for your password will be: " +passwordLength)

var passwordSpecial = confirm("Would you like your password to include Special characters?"); {

  if (passwordSpecial === true) {
    alert("You want your password to include special characters");
  }
  else if (passwordSpecial === false) {
    alert("You do not want your password to include special characters");
  }
}
 var passwordUpper = confirm("Would you like your password to include Uppercase letters?"); {
  if (passwordUpper === true) {
    alert("You want your password to include Uppercase letters");
  }
  else if (passwordUpper === false) {
    alert("You do not want your password to include Uppercase letters");
  }
}
 var passwordLower = confirm("Would you like your password to include lowercase letters?"); {
  if (passwordLower === true) {
    alert("You want your password to include lowercase letters");
  }
  else if (passwordLower === false) {
    alert("You do not want your password to include lowercase letters");
  }
}
 var passwordNumeric = confirm("Would you like your password to include numbers?"); {
  if (passwordNumeric === true) {
    alert("You want your password to include numbers");
  }
  else if (passwordNumeric === false) {
    alert("You do not want your password to include numbers")
  }
 }
 //Console logging the responses

 console.log("Password length: " +passwordLength);
 console.log("Special characters: " +passwordSpecial);
 console.log("Uppercase letters: " +passwordUpper);
 console.log("Lowercase letters: " +passwordLower);
 console.log("Numbers: " +passwordNumeric);
 

 if (passwordSpecial === true) {
  var length = passwordLength,
    charset = charset01
  passwordText = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    passwordText += charset.charAt(Math.floor(Math.random() * n));

  }
  return passwordText;
}

else if (passwordUpper === true) {
  var length = passwordLength,
    charset = charset02
  passwordText = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    passwordText += charset02.charAt(Math.floor(Math.random() * n));

  }
  return passwordText;
}

else if (passwordLower === true) {
  var length = passwordLength,
    charset = charset03
  passwordText = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    passwordText += charset03.charAt(Math.floor(Math.random() * n));
  }
  return passwordText;
}

else if (passwordNumeric === true) {
  var length = passwordLength,
    charset = charset04
  passwordText = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    passwordText += charset04.charAt(Math.floor(Math.random() * n));
  }
  return passwordText;
}

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


