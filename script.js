// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLenght = 0;
var passatLeast;
var passlowercase;
var passupercase;
var passNumber;
var passspecial;
var passgenerate = [];
var charcap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charlower = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var charsym = '~!@#$%^&*()_+-=:;}{,><./?';

//--------------------------------------------------


// Write password to the #password input
function writePassword() {
  var password = generatePassword(passLenght);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
//--------------------------------------------------

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);

//--------------------------------------------------
function collectInfo(){
  passLenght = (document.getElementById("passLenght").value);
  passlowercase = (document.getElementById("passlowercase").value);
  passupercase = (document.getElementById("passupercase").value);
  passNumber = (document.getElementById("passNumber").value);
  passspecial = (document.getElementById("passspecial").value);
  writePassword();
}
 //-------------------------------------------


// alert(generatePassword(6));
/////////////////////////////////////////////////
function generatePassword(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=:;}{,><./?';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

console.log(generatePassword(5));