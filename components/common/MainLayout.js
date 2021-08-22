import Navbar from "@/components/common/Navbar";
import BottomProgress from "@/components/common/BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "@/components/common/QuestionBox";
import ModalNotification from "@/components/common/ModalNotification";
import ShortEssay from "@/components/common/ShortEssay";

import useMainLayoutProgress from "@/components/utils/useMainLayoutProgress";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import { useAuth } from "@/components/context/AuthContext";
import useScrollActions from "@/components/utils/useScrollActions";

const MainLayout = ({
	Child1,
	Child2,
	title,
	questionData,
	instruction,
	essayQuestion,
	scrollActID,
}) => {
	const {
		isActive,
		setIsActive,
		setUpdateProgress,
		updateProgress,
		pageProgress,
	} = useMainLayoutProgress();

	const { parentPath, currentPath } = useGetCurrentPage();

	const { scrollRef, displayQuestion } = useScrollActions(
		scrollActID,
		parentPath,
		currentPath,
		setUpdateProgress,
		updateProgress
	);

	const { isAdmin } = useAuth();

	const checkIsAdmin = () => {
		if (isAdmin === true) return false;
		else if (isActive === false) return true;
	};

	const DisplayBottomProgress = () => {
		if (parentPath !== "admin" && parentPath !== "evaluasi")
			return (
				<>
					<BottomProgress pageProgress={pageProgress} />
				</>
			);
	};

	return (
		<>
			{/* Show popup modal if user is inactive for certain amount of time or user goes idle*/}
			{/* {checkIsAdmin() ? (
				<ModalNotification isActive={isActive} setIsActive={setIsActive} />
			) : null} */}
			<div className={layoutStyles.wrapper}>
				<Navbar />

				<h1 className={layoutStyles.title}>{title}</h1>

				<div
					className={
						Child2 ? layoutStyles.containerCombo : layoutStyles.containerSolo
					}
					ref={scrollRef}
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
				{displayQuestion ? (
					<div className={layoutStyles.questionBox}>
						{questionData && (
							<QuestionBox
								question={questionData}
								instruction={instruction}
								setUpdateProgress={setUpdateProgress}
								updateProgress={updateProgress}
							/>
						)}
						<span style={{ maxWidth: "55%" }}>
							{essayQuestion && <ShortEssay essayQuestion={essayQuestion} />}
						</span>
					</div>
				) : null}
			</div>
			{DisplayBottomProgress()}
		</>
	);
};

export default MainLayout;
