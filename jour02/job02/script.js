function showhide() {
	let body = document.querySelector("body");
	let article = document.querySelector("article");

	if (!article) {
		let newArticle = document.createElement("article");
		newArticle.innerText = "L'important n'est pas la chute, mais l'atterrissage.";
		body.append(newArticle);
	} else {
		article.remove();
	}
}
