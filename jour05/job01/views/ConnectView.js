class ConnectView extends View {
	show() {
		super.show();

		const container = this.container;

		container.find("form").submit(function(ev) {
			ev.preventDefault();

			$.ajax({
				method: "POST",
				url: "connexion.php",
				data: serializeToJSON($(this)),
				dataType: "json"
			}).done((result, _, response) => {
				if (result.success) {
					var SESSION = result.user;
					Page.switchView("index");
				} else {
					if (result.messages) {
						let error;
						if ((error = container.find(".error"))) {
							error.remove();
						}
						container.find("h3").after($(`<p class="error"></p>`).text(result.messages.join("\n")));
					}
				}
				console.log(result);
			});
		});
	}
}
