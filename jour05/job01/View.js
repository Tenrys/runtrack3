class View {
	async init() {
		this.template = await $.ajax({ method: "GET", url: `views/html/${this.view}.html` });

		return this;
	}

	show() {
		this.container = $(this.template);
		$("#app").append(this.container);

		this.container.find("[to]").click(function(ev) {
			ev.preventDefault();
			Page.switchView($(this).attr("to"));
		});
	}
	hide() {
		if (this.container) {
			this.container.remove();
		}
	}
}
