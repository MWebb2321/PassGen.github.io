// Assignment Code
var generateBtn = document.querySelector("#generate");
var charLength = document.querySelector("#pwLength");
var charUpper = document.querySelector("#charUpper");
var charLower = document.querySelector("#charLower");
var charNumber = document.querySelector("#charNumber");
var charSpecial = document.querySelector("#charSpecial");
var generateBtn = document.querySelector("#generate");

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
  var finalPassword = "";
  var combineAll = "";

  var pwLength = parseInt(prompt("How many characters? Between 8 and 128"));

    if (pwLength < 8 || pwLength > 128) {
      alert("This needs a proper value, please and thank you!");
      return generatePassword()
    } 
    else {
      alert("This is a good number.");
   }
    
  
  var upperConfirm = confirm("Include upper case?");
    if (upperConfirm === true){
      combineAll += charUpper
   }
  
  var lowerConfirm = confirm("Include lower case?");
    if (lowerConfirm === true){
      combineAll += charLower
   }
  
  var numberConfirm = confirm("Include numbers?");
    if (numberConfirm === true){
      combineAll += charNumber
   }
    for (var i = 0; i < length; i++){
      var num = Math.floor(Math.random() * combineAll.length)
  }  

  var specialConfirm = confirm("Include special characters?");
    if (specialConfirm === true){
      combineAll += charSpecial
  }
    for (let i = 0; i < pwLength; i++){
    var num = Math.floor(Math.random() * combineAll.length);
    finalPassword += combineAll[num];
  }
  return finalPassword
}

// Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);