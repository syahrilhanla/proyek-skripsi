import Navbar from "@/components/common/Navbar";
import BottomProgress from "@/components/common/BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "@/components/common/QuestionBox";

import ModalNotification from "@/components/common/ModalNotification";
import useMainLayoutProgress from "@/components/utils/useMainLayoutProgress";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import { useAuth } from "@/components/context/AuthContext";

const MainLayout = ({ Child1, Child2, title, questionData, instruction }) => {
	const {
		isActive,
		setIsActive,
		setUpdateProgress,
		updateProgress,
		pageProgress,
	} = useMainLayoutProgress();

	const { parentPath } = useGetCurrentPage();

	const { isAdmin } = useAuth();

	const SubmitButton = () => {
		return (
			<button className={layoutStyles.answerButton}>Submit Answers</button>
		);
	};

	const DisplayBottomProgress = () => {
		if (parentPath !== "admin" && parentPath !== "evaluasi")
			return (
				<>
					<BottomProgress pageProgress={pageProgress} />
				</>
			);
	};

	const checkIsAdmin = () => {
		if (isAdmin === true) return false;
		else if (isActive === false) return true;
	};

	return (
		<>
			{/* Show popup modal if user is inactive for certain amount of time or user goes idle*/}
			{checkIsAdmin() ? (
				<ModalNotification isActive={isActive} setIsActive={setIsActive} />
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
					{questionData ? (
						<QuestionBox
							question={questionData}
							instruction={instruction}
							setUpdateProgress={setUpdateProgress}
							updateProgress={updateProgress}
						/>
					) : parentPath === "evaluasi" ? (
						<SubmitButton />
					) : null}
				</div>
			</div>
			{DisplayBottomProgress()}
		</>
	);
};

export default MainLayout;
