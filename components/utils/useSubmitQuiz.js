import { submitQuiz } from "@/components/utils/userFirestoreSavings";

import useCalculateScore from "@/components/utils/useCalculateScore";

const useSubmitQuiz = (
	questionAmount,
	quizScore,
	overallAnswers,
	localUserData,
	chapter
) => {
	const { getScoringTotal } = useCalculateScore(questionAmount);

	const scoreToSubmit = getScoringTotal(quizScore, questionAmount);

	const optionDisplay = (answer) => {
		if (answer.index === 0) return "A";
		else if (answer.index === 1) return "B";
		else if (answer.index === 2) return "C";
		else if (answer.index === 3) return "D";
	};

	const defineAnswers = (overallAnswers) => {
		if (overallAnswers) {
			return overallAnswers.map((answer) => {
				return {
					answer: optionDisplay(answer),
					number: answer.currentQuestion,
					isTrue: answer.answer,
				};
			});
		} else return;
	};

	submitQuiz(
		localUserData.uid,
		scoreToSubmit,
		defineAnswers(overallAnswers),
		chapter
	);
};

export default useSubmitQuiz;
