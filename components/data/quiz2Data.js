export const idGenerator = () => {
	return Math.floor(Math.random() * 100000);
};

export const questionData = [
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
				answerText: "25,55 dan 40 ",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "30,55 dan 35",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "35,55 dan 30",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "40,55 dan 35",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Modus berat udang galah adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "15 kg",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "17 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "18 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "19 kg",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Mean berat udang galah adalah....",
		answerChoices: [
			{ id: idGenerator(), answerText: "17,3 kg", isCorrect: true },
			{
				id: idGenerator(),
				answerText: "19,5 kg",
				isCorrect: false,
			},
			{ id: idGenerator(), answerText: "21,3 kg", isCorrect: false },
			{
				id: idGenerator(),
				answerText: "23,5 kg",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Golongan buah yang menjadi median dari hasil panen tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "90 gr",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "100 gr",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "110 gr",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "120 gr",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Jumlah berat buah yang tidak dapat dijual ke luar daerah adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "60 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "70 kg ",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "80 kg",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "90 kg ",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Mean dari berat golongan buah (satuan kwintal) yang dapat dijual ke luar daerah adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "114,4 gr",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "116,4 gr",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "118,6 gr",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "120,6 gr",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Seorang petani menanam 10 pohon kelapa di setiap hektar dengan rata-rata 100 buah kelapa per pohon kelapa setiap tahunnya. Apabila ia memiliki 2 hektar lahan dan panennya sukses maka jumlah buah yang didapat pertahunnya adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "1200 buah",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "1500 buah",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "2000 buah",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "2200 buah",
				isCorrect: false,
			},
		],
	},
	{
		questionText:
			"Rata-rata telur yang dihasilkan oleh 13 ekor itik Alabio peternak A per harinya adalah 10 butir telur, sedangkan rata-rata telur dari 14 ekor peternak B adalah 13 butir telur. Rata-rata hasil telur yang dihasilkan oleh seluruhitik adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "7 butir",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "9 butir",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "10 butir",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "11 butir",
				isCorrect: true,
			},
		],
	},
	{
		questionText: "Median dari data tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "75",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "80",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "90",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "110",
				isCorrect: false,
			},
		],
	},
];
