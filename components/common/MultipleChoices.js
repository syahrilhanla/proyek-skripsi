import quizStyle from "@/styles/QuizStyle.module.css";
import { useState } from "react";

const MultipleChoices = ({
	questionData,
	setQuizScore,
	setIsFinished,
	isFinished,
	setCurrentQuestion,
	currentQuestion,
	overallAnswers,
	setOverallAnswers,
}) => {
	const [selectedButton, setSelectedButton] = useState(-1);

	const chooseAnswer = (isCorrect, index) => {
		setSelectedButton(index);
		let answers = [];
		const newAnswer = { index: index, answer: isCorrect, currentQuestion };
		answers.push(newAnswer);

		// if no answers yet, then push answer right away
		if (overallAnswers.length > 0) {
			// with this, system can already check whether if the answer is already exist.
			// change current answer from the same question
			overallAnswers.forEach((answer, index) => {
				if (answer.currentQuestion === newAnswer.currentQuestion) {
					let newOverallAnswers = [...overallAnswers];
					newOverallAnswers[index] = newAnswer;
					setOverallAnswers([].concat(newOverallAnswers));
				} else if (
					answer.currentQuestion === newAnswer.currentQuestion &&
					answer.index !== newAnswer.index
				) {
					// change answer from current question
					let newOverallAnswers = [...overallAnswers];
					newOverallAnswers[index] = newAnswer;
					setOverallAnswers([].concat(newOverallAnswers));
				}
			});

			// const exactAnswer = overallAnswers.some(
			// 	(answer) =>
			// 		answer.index === newAnswer.index &&
			// 		answer.currentQuestion === newAnswer.currentQuestion
			// );
			// const diffAnswerSameNum = overallAnswers.some(
			// 	(answer) =>
			// 		answer.index !== newAnswer.index &&
			// 		answer.currentQuestion === newAnswer.currentQuestion
			// );
			// const sameAnswerDiffNum = overallAnswers.some(
			// 	(answer) =>
			// 		answer.index === newAnswer.index &&
			// 		answer.currentQuestion !== newAnswer.currentQuestion
			// );
			// const diffAnswer = overallAnswers.some(
			// 	(answer) =>
			// 		answer.index !== newAnswer.index &&
			// 		answer.currentQuestion !== newAnswer.currentQuestion
			// );

			// overallAnswers.forEach((answer) => console.log(answer));
			// const submitAnswer = () => {
			// 	if (exactAnswer) return;
			// 	if (diffAnswer) setOverallAnswers([].concat(answers, overallAnswers));
			// 	console.log("exactAnswer", exactAnswer);
			// 	console.log("diffAnswerSameNum :>> ", diffAnswerSameNum);
			// 	console.log("sameAnswerDiffNum :>> ", sameAnswerDiffNum);
			// 	console.log("diffAnswer :>> ", diffAnswer);
			// };
			// submitAnswer();
		} else setOverallAnswers([].concat(answers, overallAnswers));

		if (isFinished === true) {
			answers.forEach((item) => {
				if (item.answer) setQuizScore((prevState) => prevState + 10);
			});
		}
	};

	const toNextAnswer = () => {
		if (!(currentQuestion < questionData.length - 1)) {
			setIsFinished(true);
		} else setCurrentQuestion((prevState) => prevState + 1);
	};

	const optionDisplay = (index) => {
		if (index === 0) {
			return "a";
		} else if (index === 1) {
			return "b";
		} else if (index === 2) {
			return "c";
		} else if (index === 3) {
			return "d";
		}
	};
	return (
		<>
			<div className={quizStyle.question}>
				<h3>
					Soal{" "}
					<b>
						<i>{currentQuestion + 1}</i>
					</b>{" "}
					/ {questionData.length}
				</h3>
				<p>{questionData[currentQuestion].questionText}</p>
			</div>
			<div className={quizStyle.answers}>
				{questionData[currentQuestion].answerChoices.map((answer, index) => (
					<button
						key={answer.id}
						onClick={() => chooseAnswer(answer.isCorrect, index)}
						className={
							selectedButton === index
								? quizStyle.selectedAnswer
								: quizStyle.answerButton
						}
					>
						{optionDisplay(index)}. {answer.answerText}
					</button>
				))}
				<button
					className={quizStyle.answerButton}
					onClick={() => toNextAnswer()}
				>
					Selanjutnya
				</button>
			</div>
		</>
	);
};

export default MultipleChoices;
