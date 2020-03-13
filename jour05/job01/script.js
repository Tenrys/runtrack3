const Page = {
	views: {},
	activeView: "",
	switchView(to) {
		for (const view of Object.values(this.views)) {
			view.hide();
		}

		if (location.hash !== `#${to}`) {
			history.pushState(null, null, `#${to}`);
		}
		this.views[to].show();
		activeView = to;
	}
};

function serializeToJSON(jquery) {
	if (jquery instanceof jQuery) {
		const data = {};
		jquery.serializeArray().forEach(val => {
			data[val.name] = val.value;
		});
		return data;
	}
}

$(document).ready(async () => {
	await $.getScript("View.js");
	await $.getScript("views/IndexView.js");
	await $.getScript("views/RegisterView.js");
	await $.getScript("views/ConnectView.js");

	Page.views.index = await new IndexView().init();
	Page.views.register = await new RegisterView().init();
	Page.views.connect = await new ConnectView().init();

	Page.switchView(
		{
			"": "index",
			"#index": "index",
			"#register": "register",
			"#connect": "connect"
		}[location.hash] || "index"
	);
});
