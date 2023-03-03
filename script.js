// Get the input field element
const inputField = document.getElementById('input-field');

// Get the keyboard element
const keyboard = document.getElementById('keyboard');

// Add an event listener for the keyboard click event
keyboard.addEventListener('click', function(event) {
	// Get the clicked key
	const key = event.target.textContent;

	// Append the key to the input field value
	inputField.value += key;
});
