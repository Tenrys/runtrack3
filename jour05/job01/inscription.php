<?php
	require "util.php";

	foreach (["nom", "prenom", "email", "password", "passwordConfirm"] as $field) {
		if (!array_key_exists($field, $_POST)) {
			sendError(["Il manque le champ $field dans votre requête"]);
		}
	}

	if ($_POST["password"] != $_POST["passwordConfirm"]) {
		sendError(["Votre mot de passe ne correspond pas à votre confirmation"]);
	}

	$stmt = $db->prepare("SELECT email FROM utilisateurs WHERE email = ?");
	$stmt->execute([
		$_POST["email"]
	]);
	if ($stmt->fetch()) {
		sendError(["Il existe déjà un utilisateur avec cet e-mail"]);
	}

	$pw = password_hash($_POST["password"], PASSWORD_BCRYPT);
	$stmt = $db->prepare("INSERT INTO utilisateurs (nom, prenom, email, password) VALUES (?, ?, ?, ?)");
	$success = $stmt->execute([
		$_POST["nom"],
		$_POST["prenom"],
		$_POST["email"],
		$pw,
	]);

	if ($success) {
		echo json_encode([
			"success" => true,
		]);
	} else {
		var_dump($stmt->errorInfo());
	}
?>
