$(document).ready(async () => {
	const data = await $.ajax({ method: "GET", url: "pokemon.json" });
	let allTypes = [];
	for (const pokemon of data) {
		for (const type of pokemon.type || []) {
			if (!allTypes.includes(type)) {
				allTypes.push(type);
			}
		}
	}
	for (const type of allTypes) {
		$("select").append($(`<option value='${type}'>${type}</option>`));
	}

	$("#filtrer").click(() => {
		$("tbody").empty();

		let matches = [];
		for (const { id, name: names, type: types } of data) {
			const pokemon = { id, names, types };

			if (id == $("#id").val()) {
				matches.push(pokemon);
			}

			if ($("#name").val() !== "") {
				for (const name of Object.values(names)) {
					if (
						name.toLowerCase().indexOf(
							$("#name")
								.val()
								.toLowerCase()
						) > -1
					) {
						matches.push(pokemon);
					}
				}
			}

			if (types.includes($("#type").val())) {
				matches.push(pokemon);
			}
		}
		matches = $.unique(matches);

		for (const pokemon of matches) {
			const row = $("<tr></tr>");
			row.append($(`<td>${pokemon.id}</td>`));
			row.append($(`<td>${Object.values(pokemon.names).join("<br/>")}</td>`));
			row.append($(`<td>${pokemon.types.join("<br/>")}</td>`));
			$("tbody").append(row);
		}
	});
});
