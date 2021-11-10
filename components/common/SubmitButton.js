import useSubmitAnswers from "@/components/utils/useSubmitAnswers";

import layoutStyles from "@/styles/MainLayout.module.css";

const SubmitButton = ({
	questionAmount,
	quizScore,
	setIsFinished,
	overallAnswers,
	localUserData,
}) => {
	return (
		<button
			onClick={() => {
				useSubmitAnswers(
					questionAmount,
					quizScore,
					overallAnswers,
					localUserData
				);
				setIsFinished(true);
			}}
			className={layoutStyles.answerButton}
		>
			Submit Answers
		</button>
	);
};

export default SubmitButton;
