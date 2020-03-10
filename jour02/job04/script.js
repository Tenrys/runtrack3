window.onload = () => {
	let keylogger = document.getElementById("keylogger");
	if (keylogger) {
		window.onkeypress = ev => {
			keylogger.value = keylogger.value + ev.key;
		};
	}
};
