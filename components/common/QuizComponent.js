import React, { useState } from "react";

import quizStyle from "@/styles/QuizStyle.module.css";
import layoutStyles from "@/styles/MainLayout.module.css";

const SubmitButton = () => {
	return <button className={layoutStyles.answerButton}>Submit Answers</button>;
};

const QuizComponent = ({ questionData, DisplayData }) => {
	const [quizScore, setQuizScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

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

	const DisplayScore = ({ quizScore }) => {
		const displayText = () => {
			if (quizScore < questionData.length / quizScore)
				return <h3>Kamu sebaiknya mengulang kembali materi sebelumnya</h3>;
			else
				return (
					<div>
						<h3>Kamu bisa lanjut ke materi berikutnya!</h3>
						<button className={quizStyle.answerButton}>
							Materi Berikutnya
						</button>
					</div>
				);
		};
		return (
			<div style={{ margin: "auto", textAlign: "center" }}>
				<h3>
					Skor yang kamu peroleh adalah {quizScore * 10} dari{" "}
					{questionData.length * 10}!
				</h3>
				{displayText()}
			</div>
		);
	};

	const checkAnswer = (isCorrect) => {
		if (isCorrect === true) {
			setQuizScore((prevState) => prevState + 1);
		}

		if (!(currentQuestion < questionData.length - 1)) {
			setIsFinished(true);
		} else setCurrentQuestion((prevState) => prevState + 1);
	};

	return (
		<div key={currentQuestion} className={quizStyle.main}>
			{!isFinished && <DisplayData currentQuestion={currentQuestion} />}

			<div key={currentQuestion} className={quizStyle.questionDisplay}>
				{!isFinished && (
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
							{questionData[currentQuestion].answerChoices.map(
								(answer, index) => (
									<button
										key={answer.id}
										onClick={() => checkAnswer(answer.isCorrect)}
										className={quizStyle.answerButton}
									>
										{optionDisplay(index)}. {answer.answerText}
									</button>
								)
							)}
						</div>
					</>
				)}
				{isFinished && <DisplayScore quizScore={quizScore} />}
			</div>
			<SubmitButton />
		</div>
	);
};

export default QuizComponent;
