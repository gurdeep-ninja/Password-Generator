// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
]

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
]

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

// variable (object) to store the user options for password length & strength
let passwordOptions = {
  passwordLength: 0,
  lowercase: false,
  uppercase: false,
  numeric: false,
  special: false,
  characterTypesSelected: 0
}

// Function to prompt user for password options
function getPasswordOptions() {

  // Loop through each property in the passwordOptions 
  for (const key in passwordOptions) {
    // Prompt for selecting password length
    if (key == 'passwordLength') {

      // Prompt the user to select the length of the password
      passwordOptions.passwordLength = parseInt(prompt("Choose password length (10 to 64 characters)"))

      // Confirm box to select character type lowercase
    } else if (key == 'lowercase') {

      if (passwordOptions.lowercase = confirm(`Need ${key} characters?`)) {
        passwordOptions.characterTypesSelected++
      }

      // Confirm box to select character type uppercase
    } else if (key == 'uppercase') {
      if (passwordOptions.uppercase = confirm(`Need ${key} characters?`)) {
        passwordOptions.characterTypesSelected++
      }

      // Confirm box to select character type numbers
    } else if (key == 'numeric') {
      if (passwordOptions.numeric = confirm(`Need ${key} characters?`)) {
        passwordOptions.characterTypesSelected++
      }

      // Confirm box to select character type special
    } else if (key == 'special') {
      if (passwordOptions.special = confirm(`Need ${key} characters?`)) {
        passwordOptions.characterTypesSelected++
      }
    }
    // Debugging
    //console.log(`${key}: ${passwordOptions[key]}`);
    //console.log(passwordOptions.characterTypesSelected)
  }


  // Keep track of any errors with the password options not selected properly by the user
  let errorLog = []

  if (passwordOptions.passwordLength < 10 || passwordOptions.passwordLength > 64 || isNaN(passwordOptions.passwordLength)) {

    errorLog.push("Please pick a number between 10 and 64.")

  }
  if (passwordOptions.characterTypesSelected == 0) {
    errorLog.push("Please select at least one character type.")
  }

  if (errorLog.length >= 1) {
    resetPasswordOptions()
    displayErrors(errorLog)
  } 

}

// Function to display errors to user
// array of errors passed
function displayErrors(errorLog){

  // String use to concatenate each error message as 1 for the alert box
  let errorMessages = ''
  //forEach loop (passing element and array index used in message)
  errorLog.forEach(function(element, i){
    // Error messages are concatenated with the number of errors
    errorMessages += "Error " + i + ": " + element + "\n" 

  })
  // Alert box to prompt user of errors with password options
  alert(errorMessages)
}

// A function to reset all the password options whenever the user has to generate a new password
function resetPasswordOptions() {
  passwordOptions.passwordLength = 0
  passwordOptions.lowercase = false
  passwordOptions.uppercase = false
  passwordOptions.numeric = false
  passwordOptions.special = false
  passwordOptions.characterTypesSelected = 0
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {

  // reset passwordOptions settings
  resetPasswordOptions()
  // ask the user to select password options
  getPasswordOptions()

///////////////////////////////////

  // Debug code
  // passwordOptions.passwordLength = 12
  // passwordOptions.lowercase = true
  // passwordOptions.uppercase = true
  // passwordOptions.numeric = true
  // passwordOptions.special = true
  // passwordOptions.characterTypesSelected = 4

  // Store the password in a variable
  let password = ''

  // Storing the passwordSettings such as special characters, numeric, uppercase & lower case
  // This is then used in a loop to ensure the password meets the requirements selected
  let passwordSettings = []


  // Loop through passwordOptions{} object and pick out character types selected
  // (puts selected character types in a new array)
  for (const key in passwordOptions) {
    // Debugging

    //console.log(`${key}: ${passwordOptions[key]}`);

    // Since the passwordOptions character types keys are either true or false
    // they are used in a secondary array 
    if (passwordOptions[key] === true) {
      // Array.push item to array
      passwordSettings.push(key)

    }

  }
  //console.log(passwordSettings)

  // j is used to keep track of the character type we would like to use. This makes sure we
  // have a very strong password (rather than relying on concatenating all the character type arrays together)
  let j = 0;

  // this is where we generate the password based on the length the user selected 
  for (let i = 0; i < passwordOptions.passwordLength; i++) {

    // resets the count of j if it's reached the end of the passwordSettings array
    if (j == passwordSettings.length) {
      j = 0;
    }

    // Upon each iteration of i, we are ensuring each character is based on the character type settings
    // this ensures we are atleast using each setting selected
    switch (passwordSettings[j]) {
      // pick a random lowercase character from array lower lowerCasedCharacters
      case 'lowercase':
        password += getRandom(lowerCasedCharacters)
        break
      // pick a random uppercase character from array lower upperCasedCharacters
      case 'uppercase':
        password += getRandom(upperCasedCharacters)
        break
      // pick a random numeric character from array lower numericCharacters
      case 'numeric':
        password += getRandom(numericCharacters)
        break
      // pick a random special character from array lower specialCharacters
      case 'special':
        password += getRandom(specialCharacters)
        break
    } j++
  }
  //console.log(password)

  // return the password once all the characters are generated.



  /////////////////////////////
  // returns the password to writePassword() function
  if (password !== '') {
    return password
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  // do not update the passwordText input box if the password is undefined
  if (password !== undefined) {
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);