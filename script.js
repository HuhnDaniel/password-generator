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
	// Array to check desired character type requests against
	var checkArray = ["true,true,true,true", "true,true,true,false", "true,true,false,true", "true,true,false,false", "true,false,true,true", "true,false,true,false", "true,false,false,true", "true,false,false,false", "false,true,true,true", "false,true,true,false", "false,true,false,true", "false,true,false,false", "false,false,true,true", "false,false,true,false", "false,false,false,true"];
	// Arrays for each charachter type
	var lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var uppers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
	var specials = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
	
	// Check which type of password to make
	switch(checkArray.indexOf(charTypesChosen.toString())) {
		case 0:
			var pool = [...lowers, ...uppers, ...nums, ...specials];
			lowerTimes = 0;
			upperTimes = 0;
			numTimes = 0;
			specialTimes = 0;
			while(lowerTimes * upperTimes * numTimes * specialTimes === 0) {
				// Initialize empty string to start password on
				var pwTentative = "";
				// Go through a loop to add a character for the length of the password	
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				// Check what type each character is, if all needed types are present continue, otherwise make a new password
				for(var i = 0; i < pwLength; i++) {
					if(lowers.includes(pwTentative[i])) {
						lowerTimes++;
					} else if(uppers.includes(pwTentative[i])) {
						upperTimes++;
					} else if(nums.includes(pwTentative[i])) {
						numTimes++;
					} else {
						specialTimes++;
					}
				}
			}
			break;

		case 1:
			var pool = [...lowers, ...uppers, ...nums];
			lowerTimes = 0;
			upperTimes = 0;
			numTimes = 0;
			while(lowerTimes * upperTimes * numTimes === 0) {
				var pwTentative = "";	
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(lowers.includes(pwTentative[i])) {
						lowerTimes++;
					} else if(uppers.includes(pwTentative[i])) {
						upperTimes++;
					} else {
						numTimes++;
					}
				}
			}
			break;

		case 2:
			var pool = [...lowers, ...uppers, ...specials]
			lowerTimes = 0;
			upperTimes = 0;
			specialTimes = 0;
			while(lowerTimes * upperTimes * specialTimes === 0) {
				var pwTentative = "";
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(lowers.includes(pwTentative[i])) {
						lowerTimes++;
					} else if(uppers.includes(pwTentative[i])) {
						upperTimes++;
					} else {
						specialTimes++;
					}
				}
			}
			break;

		case 3:
			var pool = [...lowers, ...uppers];
			lowerTimes = 0;
			upperTimes = 0;
			while(lowerTimes * upperTimes === 0) {
				var pwTentative = "";	
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(lowers.includes(pwTentative[i])) {
						lowerTimes++;
					} else {
						upperTimes++;
					}
				}
			}
			break;

		case 4:
			var pool = [...lowers, ...nums, ...specials];
			lowerTimes = 0;
			numTimes = 0;
			specialTimes = 0;
			while(lowerTimes * numTimes * specialTimes === 0) {
				var pwTentative = "";	
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(lowers.includes(pwTentative[i])) {
						lowerTimes++;
					} else if(nums.includes(pwTentative[i])) {
						numTimes++;
					} else {
						specialTimes++;
					}
				}
			}
			break;

		case 5:
			var pool = [...lowers, ...nums];
			lowerTimes = 0;
			numTimes = 0;
			while(lowerTimes * numTimes === 0) {
				var pwTentative = "";	
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(lowers.includes(pwTentative[i])) {
						lowerTimes++;
					} else {
						numTimes++;
					}
				}
			}
			break;

		case 6:
			var pool = [...lowers, ...specials];
			lowerTimes = 0;
			specialTimes = 0;
			while(lowerTimes * specialTimes === 0) {
				var pwTentative = "";
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(lowers.includes(pwTentative[i])) {
						lowerTimes++;
					} else {
						specialTimes++;
					}
				}
			}
			break;

		case 7:
			var pool = [...lowers];

			// All one type of character, no extra logic needed
			for(var i = 0; i < pwLength; i++) {
				pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
			}
			break;


		case 8:
			var pool = [...uppers, ...nums, ...specials];
			upperTimes = 0;
			numTimes = 0;
			specialTimes = 0;
			while(upperTimes * numTimes * specialTimes === 0) {
				var pwTentative = "";	
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(uppers.includes(pwTentative[i])) {
						upperTimes++;
					} else if(nums.includes(pwTentative[i])) {
						numTimes++;
					} else {
						specialTimes++;
					}
				}
			}
			break;

		case 9:
			var pool = [...uppers, ...nums];
			upperTimes = 0;
			numTimes = 0;
			while(upperTimes * numTimes === 0) {
				var pwTentative = "";
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(uppers.includes(pwTentative[i])) {
						upperTimes++;
					} else {
						numTimes++;
					}
				}
			}
			break;

		case 10:
			var pool = [...uppers, ...specials];
			upperTimes = 0;
			specialTimes = 0;
			while(upperTimes * specialTimes === 0) {
				var pwTentative = "";	
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(uppers.includes(pwTentative[i])) {
						upperTimes++;
					} else {
						specialTimes++;
					}
				}
			}
			break;

		case 11:
			var pool = [...uppers];
			for(var i = 0; i < pwLength; i++) {
				pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
			}
			break;

		case 12:
			var pool = [...nums, ...specials];
			numTimes = 0;
			specialTimes = 0;
			while(numTimes * specialTimes === 0) {
				var pwTentative = "";
				for(var i = 0; i < pwLength; i++) {
					pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
				}

				for(var i = 0; i < pwLength; i++) {
					if(nums.includes(pwTentative[i])) {
						numTimes++;
					} else {
						specialTimes++;
					}
				}
			}
			break;

		case 13:
			var pool = [...nums];	
			for(var i = 0; i < pwLength; i++) {
				pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
			}
			break;

		case 14:
			var pool = [...specials];
			for(var i = 0; i < pwLength; i++) {
				pwTentative = pwTentative + pool[Math.floor(Math.random() * pool.length)];
			}
			break;		
	}

	return pwTentative;
}

function inputLength() {
	// Ask for password length
	var length = parseInt(prompt("How many characters would you like in your password?\n Please enter a value between 8 and 128."));
	
	// Check to see if input is valid, if not ask again
	while(length < 8 || length > 128 || isNaN(length)) {
		alert("Length must be an integer between 8 and 128.");
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