$(document).ready(() => {
	async function updateTable() {
		const data = await $.ajax({ method: "GET", url: "users.php", dataType: "json" });

		$("tbody").empty();

		for (const user of data) {
			const row = $("<tr></tr>");
			row.append($(`<td>${user.id}</td>`));
			row.append($(`<td>${user.nom}</td>`));
			row.append($(`<td>${user.prenom}</td>`));
			row.append($(`<td>${user.email}</td>`));
			$("tbody").append(row);
		}
	}
	updateTable();
	$("#update").click(updateTable);
});
