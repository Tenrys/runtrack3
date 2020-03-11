let arcEnCiel = [];

$(document).ready(() => {
	for (let i = 0; i < 6; i++) {
		const part = $("<img src='arc" + (i + 1) + ".png'/>");
		part.click(function() {
			if (
				$(this)
					.parent()
					.attr("id") !== "rangees"
			) {
				$(this).appendTo($("#rangees"));
			}
		});
		arcEnCiel.push(part);
	}

	function shuffle() {
		arcEnCiel
			.sort(() => {
				return 0.5 - Math.random();
			})
			.forEach(el => $("#melangees").append(el));
	}
	shuffle();

	$("#button").click(() => {
		$("img").map((_, img) => {
			if (
				$(img)
					.parent()
					.attr("id") !== "melangees"
			) {
				shuffle();
			}
		});
	});
});
