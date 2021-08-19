import Navbar from "@/components/common/Navbar";
import BottomProgress from "@/components/common/BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "@/components/common/QuestionBox";
import ModalNotification from "@/components/common/ModalNotification";
import ShortEssay from "@/components/common/ShortEssay";

import useMainLayoutProgress from "@/components/utils/useMainLayoutProgress";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";
import useUpdateScrollAct from "@/components/utils/useUpdateScrollAct";

import { useBottomScrollListener } from "react-bottom-scroll-listener";
import { useAuth } from "@/components/context/AuthContext";

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

	const { isAdmin } = useAuth();

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

	const callback = () => {
		useUpdateScrollAct(scrollActID, parentPath, currentPath);
		setUpdateProgress(!updateProgress);
	};
	const scrollRef = useBottomScrollListener(callback);

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
				{questionData ? (
					<div className={layoutStyles.questionBox}>
						<QuestionBox
							question={questionData}
							instruction={instruction}
							setUpdateProgress={setUpdateProgress}
							updateProgress={updateProgress}
						/>
						{essayQuestion && <ShortEssay essayQuestion={essayQuestion} />}
					</div>
				) : null}
			</div>
			{DisplayBottomProgress()}
		</>
	);
};

export default MainLayout;
