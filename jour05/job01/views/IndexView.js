class IndexView extends View {
	show() {
		super.show();

		this.container
			.find("#welcome")
			.text(`Bonjour ${typeof SESSION !== "undefined" ? SESSION.prenom : "visiteur"} !`);

		if (typeof SESSION !== "undefined") {
			this.container.find("#register").hide();
			this.container.find("#connect").hide();

			this.container.find("#disconnect").click(() => {
				$.ajax({
					method: "POST",
					url: "deconnexion.php"
				}).done(() => {
					SESSION = undefined;
					Page.switchView("index"); // Refresh
				});
			});
		} else {
			this.container.find("#disconnect").hide();
		}
	}
}
