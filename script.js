// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
	// Initialize variables for all inputs
	var pwLength = inputLength();
	var characters = characterTypes();
	console.log(characters);
}

function inputLength() {
	// Ask for password length
	var length = parseInt(prompt("How many characters would you like in your password?\n Please enter a value between 8 and 128."));
	
	// Check to see if input is valid, if not ask again
	while(length < 8 || length > 128) {
		alert("Length must be between 8 and 128.");
		var length = parseInt(prompt("How many characters would you like in your password?\n Please enter a value between 8 and 128."));
	}
	
	// Send value back to generatePassword()
	return length;
}

function characterTypes() {
	// Ask for lowercase, uppercase, numerals, and special characters
	var types = [];
	types.push(confirm("Do you want to include lowercase letters?"));
	types.push(confirm("Do you want to include uppercase letters?"));
	types.push(confirm("Do you want to include numbers?"));
	types.push(confirm("Do you want to include special characters?"));
	
	// Check to see if input is valid, if not ask again
	while(!types.includes(true)) {
		alert("Must include at least one type of character.");
		types.push(confirm("Do you want to include lowercase letters?"));
		types.push(confirm("Do you want to include uppercase letters?"));
		types.push(confirm("Do you want to include numbers?"));
		types.push(confirm("Do you want to include special characters?"));
	}
	console.log(types);
	//send value back to generatePassword
	return types;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
