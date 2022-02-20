import evaluationQuiz from "@/components/data/evaluationQuiz";
import { submitAnswerKey } from "./userFirestoreSavings";

const useSubmitAnswerKey = () => {
	const indexDeterminer = (answer, index) => {
		if (answer) {
			if (index === 0) return "A";
			else if (index === 1) return "B";
			else if (index === 2) return "C";
			else if (index === 3) return "D";
		}
	};

	const answerList = [];
	evaluationQuiz.forEach((data, questionIndex) =>
		data.answerChoices.forEach((answer, index) => {
			if (answer.isCorrect)
				answerList.push({
					trueAnswer: indexDeterminer(answer.isCorrect, index),
					number: questionIndex,
				});
		})
	);

	// document.addEventListener("dblclick", () => console.log({ answerList }));

	submitAnswerKey(answerList);
};

export default useSubmitAnswerKey;
