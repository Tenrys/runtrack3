<?php
	require "util.php";

	foreach (["email", "password"] as $field) {
		if (!array_key_exists($field, $_POST)) {
			sendError(["Il manque le champ $field dans votre requête"]);
		}
	}

	$stmt = $db->prepare("SELECT * FROM utilisateurs WHERE email = ?");
	$success = $stmt->execute([
		$_POST["email"]
	]);
	$result = $stmt->fetch();
	if (!$result || !password_verify($_POST["password"], $result["password"])) {
		sendError(["Mot de passe incorrect"]);
	}

	$_SESSION["user"] = $result;

	if ($success) {
		echo json_encode([
			"success" => true,
			"user" => $result,
		]);
	} else {
		var_dump($stmt->errorInfo());
	}
?>
