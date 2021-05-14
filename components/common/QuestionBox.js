import React from "react";
import questionStyle from "@/styles/QuestionBox.module.css";
import useUpdateCertainAct from "@/components/utils/useUpdateCertainAct";

const QuestionBox = ({ question, instruction, logic }) => {
	const { parentPath, currentPath } = logic;
	console.log(logic);

	const checkAnswer = (item, answer) => {
		console.log(item.name);
		console.log(answer.isCorrect);

		if (answer.isCorrect) {
			useUpdateCertainAct(item.name, parentPath, currentPath);
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
