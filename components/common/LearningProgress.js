import progressStyles from "@/styles/Progress.module.css";
import BorderLinearProgress from "@/components/common/BorderLinearProgress";

const LearningProgress = ({ text, percentageValue, overallAction }) => {
	return (
		<div className={progressStyles.progresses}>
			<h3>{text}</h3>
			<span style={{ alignSelf: "center" }}>
				<BorderLinearProgress value={percentageValue} />
			</span>
			<h2 style={{ justifySelf: "center", paddingLeft: "2rem" }}>
				{overallAction}
			</h2>
		</div>
	);
};

export default LearningProgress;
