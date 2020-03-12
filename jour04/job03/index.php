<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Document</title>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="script.js"></script>
		<style></style>
	</head>

	<body>
		<main>
			<nav>
				<label for="id">ID</label>
				<input type="number" name="id" id="id">

				<label for="name">Nom</label>
				<input type="text" name="name" id="name">

				<select name="type" id="type">
					<option value="" disabled selected>Type</option>
				</select>

				<button id="filtrer">Filtrer</button>
			</nav>
			<table border="1" width="640">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nom(s)</th>
						<th>Type(s)</th>
					</tr>
				</thead>
				<tbody></tbody>
			</table>
		</main>
	</body>
</html>