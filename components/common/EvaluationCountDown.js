import { useState } from "react";

import BorderLinearProgress from "@/components/common/BorderLinearProgress";
import DisplayCountDown from "@/components/common/DisplayCountDown";

import { submitTestScore } from "@/components/utils/userFirestoreSavings";
import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

const EvaluationCountDown = ({ setTimesUp }) => {
	const [isTimeUp, setIsTimeUp] = useState(false);

	const { localUserData } = useAuth();
	const { quizScore } = useProgress;

	if (localUserData) {
		if (isTimeUp) {
			submitTestScore(localUserData.uid, quizScore);
			setTimesUp(true);
		}
	}

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				width: "85%",
				margin: "-2rem auto",
				padding: "0 0",
			}}
		>
			<div style={{ width: "100%", paddingBottom: "0.8rem" }}>
				<DisplayCountDown timeSet={1200} setCallback={setIsTimeUp} />
				<BorderLinearProgress value={percentage} />
			</div>
		</div>
	);
};

export default EvaluationCountDown;
