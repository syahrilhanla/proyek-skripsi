import quizStyle from "@/styles/QuizStyle.module.css";
import { useState } from "react";

const MultipleChoices = ({
	questionData,
	setQuizScore,
	setIsFinished,
	setCurrentQuestion,
	currentQuestion,
	overallAnswers,
	setOverallAnswers,
}) => {
	const [selectedButton, setSelectedButton] = useState(-1);

	// fires when user clicks an answer
	const useChooseAnswer = (isCorrect, index) => {
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

	// fires when user submit the answers or finished the quiz
	const calculateResults = (overallAnswers) => {
		overallAnswers.forEach((item) => {
			if (item.answer) {
				setQuizScore((prevState) => prevState + 10);
			}
		});
	};

	const toNextAnswer = () => {
		if (!(currentQuestion < questionData.length - 1)) {
			setIsFinished(true);
			calculateResults(overallAnswers);
		} else setCurrentQuestion((prevState) => prevState + 1);
	};

	// gives index for answer button
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
						onClick={() => useChooseAnswer(answer.isCorrect, index)}
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
					style={{ backgroundColor: "#6d7ede", color: "#ffff" }}
					onClick={() => toNextAnswer()}
				>
					{currentQuestion !== questionData.length - 1
						? "Selanjutnya"
						: "Submit"}
				</button>
			</div>
		</>
	);
};

export default MultipleChoices;
