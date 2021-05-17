import questionStyle from "@/styles/QuestionBox.module.css";

import useUpdateCertainAct from "@/components/utils/useUpdateCertainAct";

const QuestionBox = ({
	question,
	instruction,
	setUpdateProgress,
	updateProgress,
}) => {
	// check answers on multiple-choice question
	const checkAnswer = async (item, answer) => {
		if (answer.isCorrect) {
			await useUpdateCertainAct(item.id);

			setUpdateProgress(!updateProgress);
		} else {
			setOpen(true);
		}
	};

	return (
		<div className={questionStyle.main}>
			<h2 className={questionStyle.header}>Mari Mencoba</h2>

			<p className={questionStyle.instruction}>{instruction}</p>

			<ol className={questionStyle.questions}>
				{question.map((item, index) => (
					<li key={index}>
						<div>
							<p>{item.questionText}</p>
						</div>
						<div>
							<ul>
								{item.answerChoices.map((answer, index) => (
									<li key={index}>
										<button onClick={() => checkAnswer(item, answer)}>
											{answer.answerText}
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
