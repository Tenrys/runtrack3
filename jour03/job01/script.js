$(document).ready(() => {
	$("#button").click(() => {
		const text = $(
			"<p>Le $ est un bon élément monétaire. Le # de twitter est une bonne I D. Il faudra faire le point avec la classe pour cacher cet élément.</p>"
		);
		$("body").append(text);

		const hide = $("<button id='hide'>Cacher</button>");
		hide.click(function() {
			text.remove();
			$(this).remove();
			$("#button").show();
		});
		$("body").append(hide);

		$("#button").hide();
	});
});
