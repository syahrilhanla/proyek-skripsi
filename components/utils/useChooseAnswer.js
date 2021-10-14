import { useEffect } from "react";

const useChooseAnswer = (setSelectedButton) => {
	// fires when user clicks an answer
	const chooseAnswer = (
		isCorrect,
		index,
		currentQuestion,
		overallAnswers,
		setOverallAnswers
	) => {
		setSelectedButton(index);
		let answers = [];
		const newAnswer = { index: index, answer: isCorrect, currentQuestion };
		answers.push(newAnswer);

		// replace an exists answer
		const changeAnswer = () => {
			let newOverallAnswers = [...overallAnswers];
			newOverallAnswers.forEach((item, index) => {
				if (item.currentQuestion === newAnswer.currentQuestion) {
					newOverallAnswers[index] = newAnswer;
				}
			});
			setOverallAnswers([].concat(newOverallAnswers));
		};

		// check for duplicates in overallAnswers array
		const checkThroughAnswers = () => {
			// returns boolean whether if there's an answer already from the same question
			return overallAnswers.some(
				(answer) => answer.currentQuestion === newAnswer.currentQuestion
			);
		};

		const checkAnswers = () => {
			if (overallAnswers.length < 1) {
				setOverallAnswers(answers);
			} else if (checkThroughAnswers()) {
				changeAnswer();
			} else if (!checkThroughAnswers())
				setOverallAnswers([].concat(overallAnswers, answers));
		};

		checkAnswers();
	};

	return { chooseAnswer };
};

export default useChooseAnswer;
