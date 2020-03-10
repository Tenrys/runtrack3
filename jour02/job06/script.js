let executed = false,
	progress = 0;
const sequence = [
	"arrowup",
	"arrowup",
	"arrowdown",
	"arrowdown",
	"arrowleft",
	"arrowright",
	"arrowleft",
	"arrowright",
	"b",
	"a"
];

window.onload = () => {
	window.onkeydown = ev => {
		if (!executed) {
			const key = ev.key.toLowerCase();
			if (sequence[progress] === key) {
				console.log("correct!");
				progress++;
				if (progress === sequence.length) {
					console.log("congrats!");
					document.documentElement.id = "laplateforme";
					executed = true;
				}
			} else {
				console.log("reset!");
				progress = 0;
			}
		}
	};
};
