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
	var charTypesChosen = characterTypes();
	// Initialize empty string to start password on
	var pwTentative = "";
	// array to check desired character type requests against
	var checkArray = ["true,true,true,true", "true,true,true,false", "true,true,false,true", "true,true,false,false", "true,false,true,true", "true,false,true,false", "true,false,false,true", "true,false,false,false", "false,true,true,true", "false,true,true,false", "false,true,false,true", "false,true,false,false", "false,false,true,true", "false,false,true,false", "false,false,false,true", "false,false,false,false"];

	// Go through a loop to add a character for the length of the password
	for(var i = 0; i < pwLength; i++) {
		switch(checkArray.indexOf(charTypesChosen.toString())) {
			case 0:
				return 0;
			break;
			case 1:
				return 1;
			break;
			case 2:
				return 2;
			break;
			case 3:
				return 3;
			break;
			case 4:
				return 4;
			break;
			case 5:
				return 5;
			break;
			case 6:
				return 6;
			break;
			case 7:
				return 7;
			break;
			case 8:
				return 8;
			break;
			case 9:
				return 9;
			break;
			case 10:
				return 10;
			break;
			case 11:
				return 11;
			break;
			case 12:
				return 12;
			break;
			case 13:
				return 13;
			break;
			case 14:
				return 14;
			break;
			case 15:
				return 15;
			break;
		}
	}

	return pwTentative;
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

	//send value back to generatePassword
	return types;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
