class View {
	constructor(el) {
		this.container = $(el);
	}
	async init() {
		this.template = await $.ajax({ method: "GET", url: `views/html/${this.container.attr("view")}.html` });

		return this;
	}

	show() {
		if (this.container.children().length < 1) {
			this.container.append($(this.template));

			if (Page) {
				this.container.find("[to]").click(function(ev) {
					ev.preventDefault();
					Page.switchView($(this).attr("to"));
				});
			}
		}

		this.container.show();
	}
	hide() {
		this.container.empty();

		this.container.hide();
	}
}
