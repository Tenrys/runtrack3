let joursferies = [
	"1/1/2020",
	"13/4/2020",
	"1/5/2020",
	"8/5/2020",
	"21/5/2020",
	"1/6/2020",
	"14/7/2020",
	"15/8/2020",
	"1/11/2020",
	"11/11/2020",
	"25/12/2020"
];

function jourtravaille(date) {
	if (date instanceof Date) {
		let dateStr = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
		let dateStrLong = date.toLocaleString("fr-fr", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric"
		});
		if (joursferies.includes(dateStr)) {
			console.log(`Le ${dateStrLong} est un jour férié`);
		} else if (/(samedi|dimanche)/i.test(dateStrLong)) {
			console.log(`Non, le ${dateStrLong} est un week-end`);
		} else {
			console.log(`Oui, le ${dateStrLong} est un jour travaillé`);
		}
	}
}

jourtravaille(new Date("January 4, 2020"));
