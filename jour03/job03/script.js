$(document).ready(() => {
	let LaPlateforme = [];

	const rand = Math.ceil(Math.random() * 9) - 1;
	for (let i = 0; i < 9; i++) {
		let part;
		if (i === rand) {
			part = $("<div style='width: 184px; height: 184px;'/>");
		} else {
			part = $(`<img src='${i}.png'/>`);
		}
		LaPlateforme.push(part);
	}
	const empty = LaPlateforme[rand];

	function shuffle() {
		LaPlateforme.sort(() => {
			return 0.5 - Math.random();
		});
	}
	shuffle();

	function checkWin() {
		for (let i = 0; i < $("td").length; i++) {
			const el = $("td")[i];
			const child = $(el).children()[0];
			if (
				!["div", "img"].includes(child.tagName.toLowerCase()) ||
				(child.tagName.toLowerCase() === "img" && $(child).attr("src") !== `${i}.png`)
			) {
				return false;
			}
		}
		return true;
	}

	function refreshTable() {
		$("td").empty();
		for (let i = 0; i < $("td").length; i++) {
			const el = $("td")[i];
			$(el).append(LaPlateforme[i]);
		}

		if (checkWin()) {
			const winMsg = $("<h1 id='result' class='win'>Vous avez gagné</h1>");
			const retry = $("<button>Recommencer</button>");
			retry.click(() => {
				$(winMsg).remove();
				$(retry).remove();
				shuffle();
				refreshTable();
			});
			$("body").append(winMsg, retry);
		}
	}
	refreshTable();

	const adjacent = {
		arrowup: 3,
		arrowdown: -3,
		arrowleft: 1,
		arrowright: -1
	};
	$(document).keydown(ev => {
		if ($("#result").length > 0) return;

		const key = ev.key.toLowerCase();
		const emptyPos = LaPlateforme.indexOf(empty);
		const el = LaPlateforme[emptyPos + adjacent[key]];
		const newPos = LaPlateforme.indexOf(el);

		if (el) {
			if ((key === "arrowleft" && newPos % 3 === 0) || (key === "arrowright" && newPos % 3 === 2)) return;

			LaPlateforme[emptyPos] = el;
			LaPlateforme[newPos] = empty;

			refreshTable();
		}
	});
});
