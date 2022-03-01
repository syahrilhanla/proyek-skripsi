import Navbar from "@/components/common/Navbar";
import BottomProgress from "@/components/common/BottomProgress";

import layoutStyles from "@/styles/MainLayout.module.css";
import QuestionBox from "@/components/common/QuestionBox";
import ModalNotification from "@/components/common/ModalNotification";
import ShortEssay from "@/components/common/ShortEssay";
import BreadcrumbsComponent from "@/components/common/BreadcrumbsComponent";

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
		if (
			parentPath !== "admin" &&
			parentPath !== "evaluasi" &&
			parentPath !== "manageAdmin" &&
			parentPath !== "petunjuk"
		)
			return (
				<>
					<BottomProgress pageProgress={pageProgress} />
				</>
			);
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
				<div style={{ display: "flex", justifyContent: "center" }}>
					<BreadcrumbsComponent />
				</div>
				<div
					className={
						Child2 ? layoutStyles.containerCombo : layoutStyles.containerSolo
					}
					style={
						parentPath === "admin" || parentPath === "manageAdmin"
							? { minHeight: "75vh" }
							: { minHeight: "65vh" }
					}
				>
					<div
						// className={`${layoutStyles.column1} ${
						// 	parentPath === "manageAdmin" && layoutStyles.manageAdmin
						// }`}
						className={layoutStyles.column1}
						style={
							parentPath === "manageAdmin"
								? { alignItems: "flex-start" }
								: { alignItems: "center" }
						}
					>
						<div
							className={layoutStyles.container}
							style={
								parentPath === "admin" || parentPath === "manageAdmin"
									? { maxHeight: "65vh" }
									: { minHeight: "55vh" }
							}
							ref={scrollRef}
						>
							<Child1 />
						</div>
					</div>
					{Child2 && (
						<div className={layoutStyles.column2}>
							<div className={layoutStyles.container} ref={scrollRef}>
								<Child2 />
							</div>
						</div>
					)}
				</div>

				{displayQuestion
					? (questionData || essayQuestion) && (
							<div className={layoutStyles.questionBox}>
								{questionData && (
									<QuestionBox
										question={questionData}
										instruction={instruction}
										setUpdateProgress={setUpdateProgress}
										updateProgress={updateProgress}
									/>
								)}
								<span className={layoutStyles.shortEssay}>
									{essayQuestion && (
										<ShortEssay
											essayQuestion={essayQuestion}
											setUpdateProgress={setUpdateProgress}
											updateProgress={updateProgress}
										/>
									)}
								</span>
							</div>
					  )
					: null}
			</div>
			{DisplayBottomProgress()}
		</>
	);
};

export default MainLayout;
