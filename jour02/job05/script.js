window.onload = () => {
	window.onscroll = () => {
		let footer = document.querySelector("footer");
		let html = document.documentElement || document.querySelector("html");
		let body = document.querySelector("body");

		let scrll = body.scrollTop,
			h = html.clientHeight,
			visH = body.clientHeight;
		let scrollPercentage = scrll / (h - visH);

		let color = `hsl(${120 * scrollPercentage}, 100%, 50%)`;
		footer.style.backgroundColor = color;
	};

	window.onscroll();
};
