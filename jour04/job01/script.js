$(document).ready(() => {
	$("#button").click(() => {
		$.ajax({
			method: "GET",
			url: "expression.txt"
		}).done(data => {
			$("body").append($(`<p>${data}</p>`));
		});
	});
});
