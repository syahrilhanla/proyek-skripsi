import Navbar from "@/components/common/Navbar";
import BottomProgress from "@/components/common/BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "@/components/common/QuestionBox";

import Notification from "@/components/common/Notification";
import useMainLayoutProgress from "@/components/utils/useMainLayoutProgress";

import { useProgress } from '@/components/context/ProgressContext';
import useUpdateProgress from '@/components/utils/useUpdateProgress';

const MainLayout = ({ Child1, Child2, title, questionData, instruction }) => {

	const mainLayoutProgress = useMainLayoutProgress();
	// const { overallProgress } = useProgress();

	return (
		<>
			{/* Show popup modal if user is inactive for certain amount of time */}
			{mainLayoutProgress.isActive === false ? (
				<Notification isActive={mainLayoutProgress.isActive} setIsActive={mainLayoutProgress.setIsActive} />
			) : null}
			<div className={layoutStyles.wrapper}>
				<Navbar />

				<h1 className={layoutStyles.title}>{title}</h1>

				<div
					className={
						Child2 ? layoutStyles.containerCombo : layoutStyles.containerSolo
					}
				>
					<div className={layoutStyles.column1}>
						<Child1 />
					</div>
					{Child2 && (
						<div className={layoutStyles.column2}>
							<Child2 />
						</div>
					)}
				</div>
				<div className={layoutStyles.questionBox}>
					{questionData && (
						<QuestionBox question={questionData} instruction={instruction} />
					)}
				</div>
			</div>
			<BottomProgress pageProgress={mainLayoutProgress.pageProgress} />
		</>
	);
};

export default MainLayout;
