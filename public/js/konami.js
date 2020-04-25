var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

var keyHandler = function (event) {

	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
        epilepsy = "true";
		current = 0;
		window.alert('You have turned on epilepsy mode! Simply refresh the page to turn it off (you\'ll probably want to, trust me)');
	}

};

// Listen for keydown events
document.addEventListener('keydown', keyHandler, false);