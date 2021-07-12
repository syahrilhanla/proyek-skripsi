import { useAuth } from "@/components/context/AuthContext";
import { submitTestScore } from "@/components/utils/userFirestoreSavings";

import layoutStyles from "@/styles/MainLayout.module.css";

const SubmitButton = ({ quizScore }) => {
	const { localUserData } = useAuth();
	return (
		<button
			onClick={() => submitTestScore(localUserData.uid, quizScore)}
			className={layoutStyles.answerButton}
		>
			Submit Answers
		</button>
	);
};

export default SubmitButton;
