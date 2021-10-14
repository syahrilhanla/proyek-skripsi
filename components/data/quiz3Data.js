export const idGenerator = () => {
	return Math.floor(Math.random() * 100000);
};

export const questionData = [
	{
		questionText: "Nilai kuartil bawah dari data tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "45",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "60",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "80",
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
		questionText: "Nilai kuartil atas dari data tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "45",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "60",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "80",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "90",
				isCorrect: true,
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
				isCorrect: true,
			},
		],
	},
	{
		questionText: "Nilai simpangan kuartil dari data tersebut adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "15",
				isCorrect: true,
			},
			{
				id: idGenerator(),

				answerText: "20",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "35",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "40",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Hamparan dari data di atas adalah ....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "2 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "3 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "7 kg",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "10 kg",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Nilai kuartil kedua dari data di atas adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "6 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "7 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "8 kg",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "10 kg",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Nilai jangkauan antarkuartil dari data di atas adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "2 kg",
				isCorrect: true,
			},
			{
				id: idGenerator(),

				answerText: "3 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "7 kg",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "10 kg",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Nilai jangkauan berdasarkan data di atas adalah....",
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
		questionText: "Median dari data di atas adalah....",
		answerChoices: [
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
		],
	},
	{
		questionText: "Kuartil bawah dari data di atas adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "11 m",
				isCorrect: false,
			},
			{
				id: idGenerator(),

				answerText: "13 m",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "15 m",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "17 m",
				isCorrect: false,
			},
		],
	},
];
