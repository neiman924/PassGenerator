// Assignment Code
var generateBtn = document.querySelector("#generate");
// var generateBtn = document.querySelector("#password");
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
var password;
var passwordText;
//--------------------------------------------------


// Write password to the #password input
// function writePassword() {
//   password = generatePassword();
//   passwordText = document.querySelector("#password");
//   passwordText.value = password;
//   alert(generatePassword());
// }
//--------------------------------------------------

// Add event listener to generate button
generateBtn.addEventListener("click", collectInfo);
//--------------------------------------------------
function collectInfo(){
  passLenght = parseInt(document.getElementById("passLenght").value);
  passlowercase = (document.getElementById("passlowercase").value);
  passupercase = (document.getElementById("passupercase").value);
  passNumber = (document.getElementById("passNumber").value);
  passspecial = (document.getElementById("passspecial").value);
  password = generatePassword();
  document.getElementById('password').value = password;
}
 //-------------------------------------------


/////////////////////////////////////////////////
function generatePassword() {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=:;}{,><./?';
  var charactersLength = characters.length;
  for ( var i = 0; i < passLenght; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
 }
 return result;
}

