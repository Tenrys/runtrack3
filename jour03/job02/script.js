let arcEnCiel = [];

$(document).ready(() => {
	function checkWin() {
		for (let i = 0; i < 6; i++) {
			const el = $("#rangees").children()[i];
			if (!el || $(el).attr("src") !== `arc${i + 1}.png`) {
				return false;
			}
		}
		return true;
	}

	for (let i = 0; i < 6; i++) {
		const part = $("<img src='arc" + (i + 1) + ".png'/>");
		part.click(function() {
			if (
				$(this)
					.parent()
					.attr("id") !== "rangees"
			) {
				$(this).appendTo($("#rangees"));

				if ($("#melangees").children().length === 0) {
					if (checkWin()) {
						$("body").append($("<h1 id='result' class='win'>Vous avez gagné</h1>"));
					} else {
						$("body").append($("<h1 id='result' class='lose'>Vous avez perdu</h1>"));
					}
				}
			}
		});
		arcEnCiel.push(part);
	}

	function shuffle() {
		arcEnCiel.sort(() => {
			return 0.5 - Math.random();
		});

		for (let i = 0; i < arcEnCiel.length; i++) {
			const el = arcEnCiel[i];
			$("#melangees").append(el);
		}

		const result = $("#result");
		if (result) {
			result.remove();
		}
	}
	shuffle();
	$("#button").click(shuffle);
});
