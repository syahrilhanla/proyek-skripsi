export const idGenerator = () => {
	return Math.floor(Math.random() * 100000);
};

export const questionData = [
	{
		questionText: "Sungai terpanjang dari daftar tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Barito",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "Alalak",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Benawa",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Martapura",
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			"Jumlah hasil tangkapan ikan Kelabau di sungai Martapura adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "29 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "31 ekor",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "33 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "36 ekor",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Jumlah ikan Kelabau yang memiliki panjang di atas 30 cm adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "15 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "19 ekor",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "21 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "23 ekor",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Berdasarkan data di samping, pasangan yang memiliki hasil produksi yang sama adalah....",
		answerChoices: [
			{ id: idGenerator(), answerText: "Baung dan Paray", isCorrect: false },
			{
				id: idGenerator(),
				answerText: "Udang Galah dan Lais ",
				isCorrect: false,
			},
			{ id: idGenerator(), answerText: "Paray dan Lais", isCorrect: false },
			{
				id: idGenerator(),
				answerText: "Baung dan Udang Galah",
				isCorrect: true,
			},
		],
	},
	{
		questionText:
			"Pasangan yang menghasilkan paling produk paling banyak adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Baung dan Paray",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Udang Galah dan Lais",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "Paray dan Lais",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Baung dan Udang Galah",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Pertambahan panjang terbesar ikan gabus terjadi pada usia....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "1-2 bulan",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "4-5 bulan",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "3-4 bulan",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "2-3 bulan",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Panjang tubuh ikan Gabus pada umur 75 hari diperkirakan....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "5 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "6 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "7 cm",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "9 cm",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Pertambahan panjang ikan gabus hingga bulan keempat adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "2 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "3 cm",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "4 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "5 cm",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Jumlah itik sehat yang dapat bertelur adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "80 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "82 ekor",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "90 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "92 ekor",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Jumlah telur yang didapat sekarang adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "82 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "84 ekor",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "94 ekor",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "96 ekor",
				isCorrect: false,
			},
		],
	},
];
