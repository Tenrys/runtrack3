$(document).ready(() => {
	let LaPlateforme = [];

	const rand = Math.ceil(Math.random() * 9) - 1;
	for (let i = 0; i < 9; i++) {
		let part;
		if (i == rand) {
			part = $("<div style='width: 184px; height: 184px;'/>");
		} else {
			part = $("<img src='" + (i + 1) + ".png'/>");
		}
		LaPlateforme.push(part);
	}
	let empty = LaPlateforme[rand];
	LaPlateforme.sort(function() {
		return 0.5 - Math.random();
	});
	empty = LaPlateforme[LaPlateforme.indexOf(empty)];

	function refreshTable() {
		$("td").empty();
		$("td").map((i, td) => {
			$(td).append(LaPlateforme[i]);
		});
	}
	refreshTable();

	const adjacent = {
		arrowup: 3,
		arrowdown: -3,
		arrowleft: 1,
		arrowright: -1
	};
	$(document).keydown(ev => {
		let key = ev.key.toLowerCase();

		const emptyPos = LaPlateforme.indexOf(empty);
		const el = LaPlateforme[emptyPos + adjacent[key]];
		const newPos = LaPlateforme.indexOf(el);

		if (el) {
			if ((key == "arrowleft" && newPos % 3 === 0) || (key == "arrowright" && newPos % 3 === 2)) return;

			LaPlateforme[emptyPos] = el;
			LaPlateforme[newPos] = empty;

			refreshTable();
		}
	});
});
