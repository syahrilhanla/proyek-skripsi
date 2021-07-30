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
		questionText: "Jembatan terpanjang di Banua Anyar adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Rumpiang",
				isCorrect: true,
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
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Kota yang terkenal akan universitasnya adalah....",
		answerChoices: [
			{
				id: idGenerator(),
				answerText: "Barito",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "San Diego",
				isCorrect: true,
			},
			{
				id: idGenerator(),
				answerText: "Benawa",
				isCorrect: false,
			},
			{
				id: idGenerator(),
				answerText: "Martapura",
				isCorrect: false,
			},
		],
	},
	{
		questionText: "Kota yang terkenal akan universitasnya adalah....",
		answerChoices: [
			{
				answerText: "Barito",
				isCorrect: false,
			},
			{
				answerText: "San Diego",
				isCorrect: true,
			},
			{
				answerText: "Benawa",
				isCorrect: false,
			},
			{
				answerText: "Martapura",
				isCorrect: false,
			},
		],
	},
];
