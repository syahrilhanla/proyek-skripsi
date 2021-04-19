import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import Navbar from "./Navbar";
import BottomProgress from "./BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "./QuestionBox";

import Notification from "@/components/common/Notification";
import useMainLayoutProgress from "@/components/utils/useMainLayoutProgress";

const MainLayout = ({ Child1, Child2, title, questionData, instruction }) => {
	// const [pageProgress, setPageProgress] = useState([]);
	// const router = useRouter();

	// // passed into checking activity in utils/useCheckActivity
	// const [isActive, setIsActive] = useState(true);

	// // check if user still active, if not then change isActive to false
	// useCheckActivity(isActive, setIsActive);

	// useEffect(() => {
	// 	useGetCurrentChapterProgress(router).then((data) =>
	// 		setPageProgress(getScore(data))
	// 	);
	// }, []);

	const mainLayoutProgress = useMainLayoutProgress();

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
