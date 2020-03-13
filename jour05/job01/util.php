<?php

$db = new PDO("mysql:host=127.0.0.1;dbname=runtrack3jour5", "root", "");
$db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);

if (!isset($_SESSION)) {
	session_start();
}

function sendError($msg) {
	if (is_array($msg)) {
		echo json_encode([
			"success" => false,
			"messages" => $msg,
		]);
		die;
	} else {
		throw new Exception('$msg is not an array of strings');
	}
}

?>