class IndexView extends View {
	constructor() {
		super();
		this.view = "index";
	}

	show() {
		super.show();

		this.container.find("#welcome").text(`Bonjour ${window.SESSION ? window.SESSION.prenom : "visiteur"} !`);

		if (window.SESSION) {
			this.container.find("#register").hide();
			this.container.find("#connect").hide();

			this.container.find("#disconnect").click(() => {
				$.ajax({
					method: "POST",
					url: "deconnexion.php"
				}).done(() => {
					window.SESSION = undefined;
					Page.switchView("index"); // Refresh
				});
			});
		} else {
			this.container.find("#disconnect").hide();
		}
	}
}
