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

	const [error, setError] = useState("");
	const [currentQuestion, setCurrentQuestion] = useState(0);

	// check answers on multiple-choice question
	const checkAnswer = async (item, answer) => {
		if (answer.isCorrect) {
			if (currentQuestion < question.questions.length - 1) {
				setCurrentQuestion((prevState) => prevState + 1);
			}
			setError("Jawaban Benar!");
			setTimeout(() => setError(""), 3000);
			await useUpdateCertainAct(item.id, parentPath, currentPath);
			setUpdateProgress(!updateProgress);
		} else {
			// to display error message for 3 seconds
			setError("Jawaban Salah!");
			setTimeout(() => setError(""), 3000);
		}
	};

	return (
		<div className={questionStyle.main}>
			<h2 className={questionStyle.header}>Mari Mencoba</h2>

			{instruction && (
				<p className={questionStyle.instruction}>{instruction}</p>
			)}

			{question.Data && (
				<div className={questionStyle.dataDisplay}>{question.Data()}</div>
			)}

			<ol className={questionStyle.questions}>
				<li>
					<div>
						<h3>
							{currentQuestion + 1}. {""}
							{question.questions[currentQuestion].questionText}
						</h3>
					</div>
					<div>
						{error === "Jawaban Salah!" ? (
							<h3 className={questionStyle.error}>Jawaban Salah! Coba Lagi</h3>
						) : error === "Jawaban Benar!" ? (
							<h3 className={questionStyle.success}>Jawaban Benar!</h3>
						) : null}
						<ul className={questionStyle.choices}>
							{question.questions[currentQuestion].answerChoices.map(
								(answer) => (
									<li key={answer.answerText}>
										<button
											className={questionStyle.answer}
											onClick={() =>
												checkAnswer(question.questions[currentQuestion], answer)
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
