




// declare vars
const upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];

const lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]

const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]

const specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "\]", "\\", "<", ">", ",", ".", ":", ";", "\'", "\"", "/", "?"]

var generateBtn = document.querySelector("#generate");

// function that generates random char from arrays
function generatePassword() {
  var password = ""
  var characterArray = []
  var stringLength = prompt("How long would you like your password to be? Please choose a length of at least 8 characters and no more than 128 characters.")
  if (stringLength < 8 || stringLength > 128) {
    alert("Password length needs to be between 8 and 128.")
    return generatePassword()
  }
  var checkUpperCase = confirm("Would you like your password to include uppercase letters?")
  var checkLowerCase = confirm("Would you like your password to include lowercase letters?")
  var checkNumber = confirm("Would you like your password to include numbers?")
  var checkSpecChars = confirm("Would you like your password to include special characters?")

  // create one array out of arrays chosen from user input
  
  if (checkUpperCase) {
      characterArray += upperCase
  } if (checkLowerCase) {
    characterArray += lowerCase
  } if (checkNumber) {
    characterArray += nums
  } if (checkSpecChars) {
    characterArray += specialChars
  }

  
  // for loop to generate password from new characterArray
  for (var i = 0; i < stringLength; i++) {
    var newString = function() {
      var randIndex = Math.floor(Math.random() * characterArray.length);
      var newChar = characterArray[randIndex];
      return newChar
    } 
    password = password + newString()
  }
  return password;
}

// loop as long as string length is less than stringLength prompt
// for (var i = 0; i < stringLength; i++) {
//   if (checkUpperCase === true) {
//     // generate random uppercase letter
//   } if (checkLowerCase === true) {
//     // generate random lowercase letter
//   } if (checkNumber === true) {
//     // generate random number
//   } if (checkSpecChars === true) {
//     // generate random spec Char
//   } 
// }



// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
