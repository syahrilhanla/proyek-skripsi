import quizStyle from "@/styles/QuizStyle.module.css";

const MultipleChoices = ({
	questionData,
	setQuizScore,
	setIsFinished,
	setCurrentQuestion,
	currentQuestion,
}) => {
	const checkAnswer = (isCorrect) => {
		if (isCorrect === true) {
			setQuizScore((prevState) => prevState + 10);
		}

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
						onClick={() => checkAnswer(answer.isCorrect)}
						className={quizStyle.answerButton}
					>
						{optionDisplay(index)}. {answer.answerText}
					</button>
				))}
			</div>
		</>
	);
};

export default MultipleChoices;
