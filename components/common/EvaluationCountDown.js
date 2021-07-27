import BorderLinearProgress from "@/components/common/BorderLinearProgress";
import DisplayCountDown from "@/components/common/DisplayCountDown";

import useTimerPercentage from "@/components/utils/useTimerPercentage";
import { submitTestScore } from "@/components/utils/userFirestoreSavings";
import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

const EvaluationCountDown = () => {
	const { percentage } = useTimerPercentage();
	const { localUserData } = useAuth();
	const { quizScore } = useProgress;

	if (localUserData) {
		if (percentage === 0) submitTestScore(localUserData.uid, quizScore);
	}

	return (
		<div>
			<DisplayCountDown timeSet={600} />
			<BorderLinearProgress value={percentage} />
		</div>
	);
};

export default EvaluationCountDown;
