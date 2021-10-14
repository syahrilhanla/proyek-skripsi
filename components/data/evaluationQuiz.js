export const idGenerator = () => {
	return Math.floor(Math.random() * 100000);
};

const evaluationQuiz = [
	{
		questionText: "Modus dari data tersebut adalah ikan ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Lundu",
				isCorrect: true,
			},
			{
				id: idGenerator(),

				answerText: "Papuyu",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Sepat",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Gapi",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Jumlah ikan Baung yang terdapat di peternakan tersebut adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "1000",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "1100",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "1200",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "1300",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Panjang rata-rata ikan dari peternakan tersebut adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "15",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "15,4",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "18",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "18,4",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Berdasarkan data di atas, kelompok yang memiliki nilai yang sama adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Kelompok 15 dan 16 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "Kelompok 16 dan 17 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Kelompok 15 dan 17 cm",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "Kelompok 14 dan 16 cm",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Gabungan kelompok yang memiliki nilai terbesar adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Kelompok 15 dan 16 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "Kelompok 16 dan 17 cm",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Kelompok 15 dan 17 cm",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "Kelompok 14 dan 16 cm",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Rata-rata pendapatan dari keseluruhan hasil tangkapan sungai tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "35,25 ton",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "41,25 ton",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "55,50 ton",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "61,50 ton",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Median dari data tersebut adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Sepat Siam",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "Belida",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Udang Tawar",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "Udang lainnya",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Seorang petani menanam 20 pohon kelapa di setiap hektar dengan rata-rata 100 buah kelapa per pohon kelapa setiap tahunnya. Apabila ia memiliki 2 hektar lahan dan panennya sukses maka jumlah buah yang didapat pertahunnya adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "1000",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "2000",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "3000",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "4000",
				isCorrect: true,
			},
		],
	},
	{
		questionText: "Pernyataan yang benar berdasarkan data tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Modus = 35, yaitu data yang berada di tengah",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "Modus = 35, yaitu data yang muncul paling banyak",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Modus = 40, yaitu data yang muncul paling banyak",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText:
					"Modus = 40, yaitu hasil bagi jumlah data dengan banyak data",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Mean dan median dari data tersebut secara berurutan adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "25, 55, dan 40",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "35, 55, dan 40",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "25, 55, dan 15",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "35, 55, dan 40",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Nilai kuartil bawah dan kuartil atas dari data tersebut adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "45 dan 60",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "60 dan 80",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "60 dan 90",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "75 dan 90",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Nilai jangkauan antarkuartil dari data tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "30",
				isCorrect: true,
			},
			{
				id: idGenerator(),

				answerText: "50",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "70",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "90",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Hamparan dari data di atas adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "5 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "7 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "9 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "10 kg",
				isCorrect: true,
			},
		],
	},
	{
		questionText: "Jangkauan data berdasarkan nilai di atas adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "7 m",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "9 m",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "11 m",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "13 m",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Median dari data di atas adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "13 m",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "15 m",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "17 m",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "19 m",
				isCorrect: false,
			},
		],
	},
];

export default evaluationQuiz;
