//public variables 
var generateBtn = document.querySelector("#generate");
var passLenght = 0;
var passlowercase;
var passupercase;
var passNumber;
var passspecial;
var charcap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var charlower = 'abcdefghijklmnopqrstuvwxyz';
var numbers = '0123456789';
var charsym = '~!@#$%^&*()_+-=:;}{,><./?';
var password;


//this line was here when i arrived 
generateBtn.addEventListener("click", collectInfo);


//collection information from html and calling password generator function and
//returning the result to html 
function collectInfo(){
  passLenght = parseInt(document.getElementById("passLenght").value);
  if (passLenght < 5 || passLenght > 128){
    alert ("Password length should be between 5 and 128 characters");
    location.reload();
    return false;
  }
  passlowercase = (document.getElementById("passlowercase").value);
  passupercase = (document.getElementById("passupercase").value);
  passNumber = (document.getElementById("passNumber").value);
  passspecial = (document.getElementById("passspecial").value);
  password = generatePassword();
  document.getElementById('password').value = password;
}


 //password generator function , everytime loop runing its going to select new 
 //element from characters variable with charAt and math.random function and
 //adding it to the end for result variable 
function generatePassword() {
  var result = '';
  var characters = setCharacters();
  var charactersLength = characters.length;
  for ( var i = 0; i < passLenght; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
 }
 return result;
}
 //specify character we want to have in the password and return it to generatepass function
function setCharacters(){
  var setChar = '';
  if (passlowercase === 'true') setChar += 'abcdefghijklmnopqrstuvwxyz';
  if (passupercase === 'true') setChar += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (passNumber === 'true') setChar += '0123456789';
  if (passspecial === 'true') setChar += '~!@#$%^&*()_+-=:;}{,><./?';
  //if user didnt select any of them:
  if (passlowercase === 'false' && passupercase === 'false' && passspecial === 'false' && passNumber=== 'false' )
{
  alert("You didn't pick any specific characters so I picked a secure password for you");
  setChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=:;}{,><./?';
}


  return setChar;
}
 //-------------------------------------------
