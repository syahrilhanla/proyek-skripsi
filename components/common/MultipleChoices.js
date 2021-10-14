import quizStyle from "@/styles/QuizStyle.module.css";
import { useState } from "react";
import useChooseAnswer from "@/components/utils/useChooseAnswer";

const MultipleChoices = ({
	questionData,
	setIsFinished,
	setCurrentQuestion,
	currentQuestion,
	overallAnswers,
	setOverallAnswers,
}) => {
	const [selectedButton, setSelectedButton] = useState(-1);
	const { chooseAnswer } = useChooseAnswer(setSelectedButton);

	const toNextAnswer = () => {
		if (!(currentQuestion < questionData.length - 1)) {
			setIsFinished(true);
		} else {
			setCurrentQuestion((prevState) => prevState + 1);
		}
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
						onClick={() =>
							chooseAnswer(
								answer.isCorrect,
								index,
								currentQuestion,
								overallAnswers,
								setOverallAnswers
							)
						}
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
