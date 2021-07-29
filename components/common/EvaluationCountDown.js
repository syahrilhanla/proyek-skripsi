import BorderLinearProgress from "@/components/common/BorderLinearProgress";
import DisplayCountDown from "@/components/common/DisplayCountDown";

import useTimerPercentage from "@/components/utils/useTimerPercentage";
import { submitTestScore } from "@/components/utils/userFirestoreSavings";
import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

const EvaluationCountDown = ({ setTimesUp }) => {
	const { percentage } = useTimerPercentage();
	const { localUserData } = useAuth();
	const { quizScore } = useProgress;

	if (localUserData) {
		if (percentage === 1) {
			submitTestScore(localUserData.uid, quizScore);
			setTimesUp(true);
		}
	}

	return (
		<div>
			<DisplayCountDown timeSet={600} />
			<BorderLinearProgress value={percentage} />
		</div>
	);
};

export default EvaluationCountDown;
