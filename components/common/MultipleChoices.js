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
		const newAnswer = { index: index, answer: isCorrect };
		answers.push(newAnswer);

		// answers.forEach((item) => {
		// 	if (item === index) {
		// 		answers[index] = newAnswer;
		// 		console.log("index", index);
		// 		console.log(item);
		// 	}
		// });

		// answers.forEach((item) => {
		// 	if (item === index) {
		// 		setOverallAnswers([].concat(answers, overallAnswers));
		// 		console.log("same answer");
		// 		console.log("index", index);
		// 		console.log(item);
		// 	}
		// });

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
