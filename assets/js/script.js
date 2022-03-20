

// declare vars
var upperCase = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M"];
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
var nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var specialChars = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "|", "[", "\]", "\\", "<", ">", ",", ".", ":", ";", "\'", "\"", "/", "?"]

// function that generates random char from arrays
function generatePassword() {
  var password = "";
  var characterArray = [];
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
    characterArray = characterArray.concat(upperCase)
  } 
  if (checkLowerCase) {
    characterArray = characterArray.concat(lowerCase)
  } 
  if (checkNumber) {
    characterArray = characterArray.concat(nums)
  } 
  if (checkSpecChars) {
    characterArray = characterArray.concat(specialChars)
  }

  // for loop to generate password from new characterArray
  for (var i = 0; i < stringLength; i++) {
    function newString() {
      var randIndex = Math.floor(Math.random()*characterArray.length);
      var newChar = characterArray[randIndex];
      return newChar
    } 
    password += newString()
  }
  return password;
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
