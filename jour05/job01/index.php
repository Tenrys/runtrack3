<?php

session_start();

?>

<!DOCTYPE html>

<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<?php
			if (isset($_SESSION) && isset($_SESSION["user"])) { ?>
				<script>window.SESSION = JSON.parse(`<?= json_encode($_SESSION["user"]) ?>`)</script>
			<?php }
		?>
		<script src="script.js"></script>
		<link rel="stylesheet" href="style.css">
	</head>

	<body>
		<main>
			<section view="index" style="display: none;"></section>
			<section view="register" style="display: none;"></section>
			<section view="connect" style="display: none;"></section>
		</main>
	</body>
</html>