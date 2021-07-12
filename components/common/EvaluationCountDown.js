import BorderLinearProgress from "@/components/common/BorderLinearProgress";
import DisplayCountDown from "@/components/common/DisplayCountDown";

import useTimerPercentage from "@/components/utils/useTimerPercentage";

const EvaluationCountDown = () => {
	const { percentage } = useTimerPercentage();

	return (
		<div>
			<DisplayCountDown timeSet={600} />
			<BorderLinearProgress value={percentage} />
		</div>
	);
};

export default EvaluationCountDown;
