//variable declaration
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k"
  , "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "\\", "\""];


//functions
function passwordCriteria() {
  var length = parseInt(prompt("How long would you like your password to be? Must be a minumum of 8 characters and a maxiumum of 128 characters."));
  //check if longer than 8 and less than 128

  if(isNaN(length)=== true){
    alert('You must enter a number');
    return;
  }

  if (length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  } 
  
  if (length > 128) {
    alert("Password must be no more than 128 characters long");
    return;
  }


  //when click save numbers, want pool or number array to join the array that will hold all of the storeValues options
  var hasNumericCharacters = confirm("click OK if you would like to inlcude numbers");
  var hasLowerCasedCharacters = confirm("Click OK if you would like to include lower case letters");
  var hasUpperCasedCharacters = confirm("Click OK if you would like to include upper case letters");
  var hasSpecialCharacters = confirm("Click OK if you would like to include special characters");

  if (
    hasNumericCharacters === false &&
    hasSpecialCharacters === false &&
    hasUpperCasedCharacters === false &&
    hasLowerCasedCharacters === false
  ) {
    alert("must select at least one character type");
    return;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCasedCharacters: hasLowerCasedCharacters,
    hasUpperCasedCharacters: hasUpperCasedCharacters
  };

  return passwordOptions;

}

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}


//function that geneartes a storeValues, needs options, a result, possible characters to chose from all possible, 
function generatePassword() {
  //pasword Options stores values 
  var storeValues = passwordCriteria();
//container
  var finalPassword = [];
  //inside array, if hasHasNumbers = true, then concat number array to characterBank, 
  //container 
  var characterBank = [];
  var guaranteedCharacters = []
  // if hasNumbers is true  add numbers array to possible Charcters array
  
  if  (storeValues.hasNumericCharacters) {
    //take numbers array and concat into characterBank
     characterBank = characterBank.concat(numeric);
  //get random character
    
  //then add a random character to gauranteedCharacters
    guaranteedCharacters.push(getRandom(numeric));
    }
  // if hasSpecialCharacters is true  add numbers array to possible Charcters array
    //then add a random character to gauranteedCharacters
  if  (storeValues.hasSpecialCharacters) {
    characterBank = characterBank.concat(specialCharacter);
    guaranteedCharacters.push(getRandom(specialCharacter));
  }
  
    // if hasLOwerCase is true  add numbers array to possible Charcters array
    //then add a random character to gauranteedCharacters
  if  (storeValues.hasLowerCasedCharacters) {
    characterBank = characterBank.concat(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  if  (storeValues.hasUpperCasedCharacters) {
    characterBank = characterBank.concat(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  
  for (var i = 0; i < storeValues.length; i++) {
    var possibleCharacters = getRandom(characterBank);

    finalPassword.push(possibleCharacters);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    finalPassword[i] = guaranteedCharacters[i];
  }

  return finalPassword.join('');
}

// Generate element
var generateBtn = document.querySelector("#generate");


// Write storeValues to the #storeValues input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);