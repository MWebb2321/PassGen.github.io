// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = document.querySelector("#pwLength");
var charUpper = document.querySelector("#charUpper");
var charLower = document.querySelector("#charLower");
var charNumber = documen.querySelector("#charNumber");
var charSpecial = document.querySelector("#charSpecial");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLower = "abcdefghijklmnopqrstuvwxyz";
  var charNumber = "1234567890";
  var charSpecial = "!@#$%^&*()><}{][";

  var pwLength = parseInt(prompt("How many characters? Between 8 and 128"));

    if (pwLength < 8 || pwLength > 128) {
      alert("This needs a proper value, please and thank you!");
    } 
    else {
      alert("This is a good number.");
    }
  
  var charUpper = confirm("Include upper case?");{
    console.log(charUpper)
  }

  var charLower = confirm("Include lower case?");{
    console.log(charLower)
  }

  var charNumber = confirm("Include numbers?");{
    for (var i = 0; i < length; i++){
    }
    console.log(charNumber)
  }

  var charSpecial = confirm("Include special characters?");{
    console.log(charSpecial)
  }

// Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);{
    
  }