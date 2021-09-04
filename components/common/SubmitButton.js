import { useAuth } from "@/components/context/AuthContext";
import { submitTestScore } from "@/components/utils/userFirestoreSavings";

import layoutStyles from "@/styles/MainLayout.module.css";
import useCalculateScore from "@/components/utils/useCalculateScore";

const SubmitButton = ({ questionAmount, quizScore, setIsFinished }) => {
	const { localUserData } = useAuth();
	const { getScoringTotal } = useCalculateScore(questionAmount);

	const scoreToSubmit = getScoringTotal(quizScore, questionAmount);

	return (
		<button
			onClick={() => {
				submitTestScore(localUserData.uid, scoreToSubmit);
				setIsFinished(true);
			}}
			className={layoutStyles.answerButton}
		>
			Submit Answers
		</button>
	);
};

export default SubmitButton;
