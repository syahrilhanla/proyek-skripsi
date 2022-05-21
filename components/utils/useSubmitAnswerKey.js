// USED ONLY TO SET ANSWER KEY DATA IN THE DATABASE

// imported data
import evaluationQuiz from "@/components/data/evaluationQuiz";
import { questionData as quiz1Data } from "@/components/data/quiz1Data";
import { questionData as quiz2Data } from "@/components/data/quiz2Data";
import { questionData as quiz3Data } from "@/components/data/quiz3Data";

import { submitAnswerKey } from "@/components/utils/userFirestoreSavings";

const useSubmitAnswerKey = () => {
	const indexDeterminer = (answer, index) => {
		if (answer) {
			if (index === 0) return "A";
			else if (index === 1) return "B";
			else if (index === 2) return "C";
			else if (index === 3) return "D";
		}
	};

	const makeAnswerObjects = (importedData) => {
		const answerList = [];
		importedData.forEach((data, questionIndex) =>
			data.answerChoices.forEach((answer, index) => {
				if (answer.isCorrect)
					answerList.push({
						trueAnswer: indexDeterminer(answer.isCorrect, index),
						number: questionIndex,
					});
			})
		);
		return answerList;
	};

	// document.addEventListener("dblclick", () => console.log({ answerList }));

	submitAnswerKey(makeAnswerObjects(evaluationQuiz), "answerList");
	submitAnswerKey(makeAnswerObjects(quiz1Data), "chapter1");
	submitAnswerKey(makeAnswerObjects(quiz2Data), "chapter2");
	submitAnswerKey(makeAnswerObjects(quiz3Data), "chapter3");
};

export default useSubmitAnswerKey;
