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

	// check answers on multiple-choice question
	const checkAnswer = async (item, answer) => {
		if (answer.isCorrect) {
			await useUpdateCertainAct(item.id, parentPath, currentPath);

			setUpdateProgress(!updateProgress);
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

			<ol className={questionStyle.questions}>
				{question.map((item, index) => (
					<li key={index}>
						<div>
							<h3>
								{index + 1}. {""}
								{item.questionText}
							</h3>
						</div>
						<div>
							<ul className={questionStyle.choices}>
								{item.answerChoices.map((answer, index) => (
									<li key={index}>
										<button
											className={questionStyle.answer}
											onClick={() => checkAnswer(item, answer)}
										>
											<p>{answer.answerText}</p>
										</button>
									</li>
								))}
							</ul>
						</div>
					</li>
				))}
			</ol>
		</div>
	);
};

export default QuestionBox;
