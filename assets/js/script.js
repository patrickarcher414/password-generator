





// Assignment code here

// declare vars
var upperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D',
  'F','G','H','J','K','L','Z','X','C','V','B','N','M'];

var lowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d',
  'f','g','h','j','k','l','z','x','c','v','b','n','m']

var nums = ['1','2','3','4','5','6','7','8','9','0','1','2','3','4','5','6','7','8','9','0']

var specialChars = ['~','`','!','@','#','$','%','^','&',
  '*','(',')','_','-','+','=','{','}','|','[','\]','\\','`',':',';','\"','\'']




// function that generates random char from arrays
function generatePassword() {
  var stringLength = prompt("How long would you like your password to be? Please choose a length of at least 8 characters and no more than 128 characters.")
  while (parseInt(stringLength) < 8 || parseInt(stringLength) > 128) {
    prompt("Password length needs to be between 8 and 128.")
    
  }
  var checkUpperCase = confirm("Would you like your password to include uppercase letters?")
  var checkLowerCase = confirm("Would you like your password to include lowercase letters?")
  var checkNumber = confirm("Would you like your password to include numbers?")
  var checkSpecChars = confirm("Would you like your password to include special characters?")


  var character = ""
  if (checkUpperCase) {
      character += upperCase
  } if (checkLowerCase) {
    character += lowerCase
  } if (checkNumber) {
    character += nums
  } if (checkSpecChars) {
    character += specialChars
  } else {
    alert("Please pick at least one type of character to include in your password")
  }

  // var randNum = Math.floor(Math.random() * 4) + 1
  

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
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
