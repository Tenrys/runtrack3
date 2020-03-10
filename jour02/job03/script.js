function addone() {
	let compteur = document.getElementById("compteur");
	if (compteur) {
		compteur.innerText++;
	}
}

window.onload = () => {
	let button = document.getElementById("button");
	if (button) {
		button.onclick = addone;
	}
};
