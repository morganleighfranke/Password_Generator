//variable declaration
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k"
  , "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "{", "}", "[", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "\\", "\""];


//functions
function passwordCriteria() {
  var length = prompt("How long would you like your password to be? Must be a minumum of 8 characters and a maxiumum of 128 characters.");
  //check if longer than 8 and less than 128
  if (length < 8) {
    alert("Must be at least 8");
    return;
  }

  if (length > 128) {
    alert("Must be no more than 128");
    return;
  }

  //when click save numbers, want pool or number array to join the array that will hold all of the password options
  var hasNumericCharacters = confirm("click OK if you would like to inlcude numbers");


  var hasLowerCasedCharacters = confirm("Click OK if you would like to include lower case letters");

  var hasUpperCasedCharacters = confirm("Click OK if you would like to include upper case letters");

  var hasSpecialCharacters = confirm("Click OK if you would like to include special characters");

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

//function that geneartes a password, needs options, a result, possible characters to chose from all possible, 
function generatePassword() {
  //pasword Options stores values 
  var passwordOptions = passwordCriteria();
//container
  var finalPassword = ""
  //inside array, if hasHasNumbers = true, then concat number array to characterBank, 
  //container 
  var characterBank = [];
  var guaranteedCharacters = []
  // if hasNumbers is true  add numbers array to possible Charcters array
  
  if (passwordOptions.hasNumberCharacters) {
    //take numbers array and concat into characterBank
     characterBank.push(numbers);
  //get random character
    
  //then add a random character to gauranteedCharacters
    guaranteedCharacters.push(getRandom(numbers));
    }
  //create more if statements for each options
  if (passwordOptions.hasSpecialCharacters) {
    characterBank.push(specialCharacter);
    guaranteedCharacters.push(getRandom(specialCharacter));
  }
  
  if (passwordOptions.hasLowerCasedCharacters) {
    characterBank.push(lowercase);
    guaranteedCharacters.push(getRandom(lowercase));
  }

  if (passwordOptions.hasUpperCasedCharacters) {
    characterBank.push(uppercase);
    guaranteedCharacters.push(getRandom(uppercase));
  }

  // getRandom(specialCharacter);

  // if hasLOwerCase is true  add numbers array to possible Charcters array
    //then add a random character to gauranteedCharacters

  // if hasSpecialCharacters is true  add numbers array to possible Charcters array
    //then add a random character to gauranteedCharacters

  // possibleCharaters = [1,2,3,H,K,L,%,$,*]
  // until finalpassword.length = options.length
      // pick a random charcters from possibleCharcters array
  }





//use passwordOptions to create a new function 

//event listeners

//log -- call function, setup listeners, act on them


// Generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);