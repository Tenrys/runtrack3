<?php
	$db = new PDO("mysql:host=127.0.0.1;dbname=runtrack3jour4", "root", "");
	$stmt = $db->prepare("SELECT * FROM utilisateurs");
	$stmt->execute();
	$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

	echo json_encode($result);
?>
