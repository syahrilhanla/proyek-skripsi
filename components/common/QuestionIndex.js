import indexingStyle from "@/styles/QuestionIndex.module.css";

const QuestionIndex = ({
	setCurrentQuestion,
	questionData,
	overallAnswers,
}) => {
	const determineButtonColor = (index) => {
		const isFound = overallAnswers.some(
			(answer) => answer.currentQuestion === index
		);
		if (isFound) return indexingStyle.answeredQuestion;
		else return indexingStyle.buttonNumber;
	};

	return (
		<div className={indexingStyle.borderOnly}>
			<h2>Indeks Soal:</h2>
			<div className={indexingStyle.mother}>
				{questionData.map((question, index) => {
					return (
						<h3
							key={index}
							className={determineButtonColor(index)}
							onClick={() => setCurrentQuestion(index)}
						>
							{index + 1}
						</h3>
					);
				})}
			</div>
		</div>
	);
};

export default QuestionIndex;
