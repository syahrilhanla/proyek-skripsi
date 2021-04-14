import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BottomProgress from "./BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "./QuestionBox";

import { useProgress } from "@/components/context/ProgressContext";
import { getScore } from "@/components/utils/dataProcessors";
import useCheckActivity from "@/components/utils/useCheckActivity";

import Notification from "@/components/common/Notification";

const MainLayout = ({ Child1, Child2, title, questionData, instruction }) => {
	const { getCurrentChapterProgress } = useProgress();
	const [pageProgress, setPageProgress] = useState([]);

	// passed into checking activity in utils/useCheckActivity
	const [isActive, setIsActive] = useState(true);

	// check if user still active, if not then change isActive to false
	useCheckActivity(isActive, setIsActive);

	useEffect(() => {
		setPageProgress(getScore(getCurrentChapterProgress()));
	}, []);

	return (
		<>
			{/* Show popup modal if user is inactive for certain amount of time */}
			{isActive === false ? (
				<Notification isActive={isActive} setIsActive={setIsActive} />
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
							{isActive === false ? <div>inactive</div> : <div>active</div>}
						</div>
					)}
				</div>
				<div className={layoutStyles.questionBox}>
					{questionData && (
						<QuestionBox question={questionData} instruction={instruction} />
					)}
				</div>
			</div>
			<BottomProgress pageProgress={pageProgress} />
		</>
	);
};

export default MainLayout;
