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

      // If the password length does not meet criteria, re-prompt the user
      if (passwordOptions.passwordLength < 10 || passwordOptions.passwordLength > 64 || isNaN(passwordOptions.passwordLength)) {

        let tryAgain = confirm("Please pick a number between 10 and 64")

        // Confirmation prompt put into variable so user can gracefully exit the password selection process (instead of closing browser!)
        if (tryAgain) {
          getPasswordOptions()
        } else {
        // Exit the loop if user doesn't want to carry on
          break
        }
      }
    // Confirm box to select character type lowercase
  } else if (key == 'lowercase') {
    
    if(passwordOptions.lowercase = confirm(`Need ${key} characters?`)){
      passwordOptions.characterTypesSelected++ 
    }
    
    // Confirm box to select character type uppercase
  } else if (key == 'uppercase') {
    if(passwordOptions.uppercase = confirm(`Need ${key} characters?`)){
      passwordOptions.characterTypesSelected++ 
    }

    // Confirm box to select character type numbers
  } else if (key == 'numeric') {
    if(passwordOptions.numeric = confirm(`Need ${key} characters?`)){
      passwordOptions.characterTypesSelected++ 
    }

    // Confirm box to select character type special
    } else if (key == 'special') {
      if(passwordOptions.special = confirm(`Need ${key} characters?`)){
        passwordOptions.characterTypesSelected++ 
      }
    }
    // Debugging
    //console.log(`${key}: ${passwordOptions[key]}`);
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

// Function to generate password with user input
function generatePassword() {
  passwordOptions.characterTypesSelected = 0
  getPasswordOptions()

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);