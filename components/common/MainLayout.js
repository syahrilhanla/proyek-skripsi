import React from "react";
import Navbar from "./Navbar";
import BottomProgress from "./BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "./QuestionBox";

import { useProgress } from "@/components/context/ProgressContext";

const MainLayout = ({
	Child1,
	Child2,
	title,
	questionData,
	instruction,
	percentageValue,
}) => {
	const { getCurrentChapterProgress } = useProgress();

	console.log(getCurrentChapterProgress());

	return (
		<>
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
			<BottomProgress percentageValue={percentageValue} />
		</>
	);
};

export default MainLayout;
