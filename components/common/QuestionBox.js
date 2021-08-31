import { useState } from "react";

import useUpdateCertainAct from "@/components/utils/useUpdateCertainAct";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import questionStyle from "@/styles/QuestionBox.module.css";

const QuestionBox = ({
	question,
	instruction,
	setUpdateProgress,
	updateProgress,
}) => {
	const { parentPath, currentPath } = useGetCurrentPage();

	const [error, setError] = useState(false);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	// check answers on multiple-choice question
	const checkAnswer = async (item, answer) => {
		console.log("answer.isCorrect", answer.isCorrect);
		if (answer.isCorrect) {
			if (currentQuestion < question.questions.length - 1) {
				setCurrentQuestion((prevState) => prevState + 1);
			}

			setUpdateProgress(!updateProgress);
			await useUpdateCertainAct(item.id, parentPath, currentPath);
		} else {
			// to display error message for 3 seconds
			setError(true);
			setTimeout(() => setError(false), 3000);
		}
	};

	return (
		<div className={questionStyle.main}>
			{error && (
				<h3 className={questionStyle.error}>Jawaban Salah! Coba Lagi</h3>
			)}

			<h2 className={questionStyle.header}>Mari Mencoba</h2>

			<p className={questionStyle.instruction}>{instruction}</p>

			<div className={questionStyle.dataDisplay}>{question.Data()}</div>

			<ol className={questionStyle.questions}>
				<li>
					<div>
						<h3>
							{currentQuestion + 1}. {""}
							{question.questions[currentQuestion].questionText}
						</h3>
					</div>
					<div>
						<ul className={questionStyle.choices}>
							{question.questions[currentQuestion].answerChoices.map(
								(answer) => (
									<li key={answer.answerText}>
										<button
											className={questionStyle.answer}
											onClick={() =>
												checkAnswer(
													questions.questions[currentQuestion],
													answer
												)
											}
										>
											<p>{answer.answerText}</p>
										</button>
									</li>
								)
							)}
						</ul>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default QuestionBox;
