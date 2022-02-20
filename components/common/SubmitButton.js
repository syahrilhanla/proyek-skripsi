import { useState, useEffect } from "react";

import useSubmitAnswers from "@/components/utils/useSubmitAnswers";

import layoutStyles from "@/styles/MainLayout.module.css";
import AlertDialog from "@/components/common/Dialog";

const SubmitButton = ({
	questionAmount,
	quizScore,
	setIsFinished,
	overallAnswers,
	localUserData,
}) => {
	const [isDialogOpened, setIsDialogOpened] = useState(false);
	const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);

	useEffect(() => {
		if (isAnswerSubmitted) {
			useSubmitAnswers(
				questionAmount,
				quizScore,
				overallAnswers,
				localUserData
			);
			setIsFinished(true);
		}
	}, [isAnswerSubmitted]);

	const checkIsFullyAnswered = () => {
		if (overallAnswers.length === questionAmount) {
			console.log(overallAnswers.length, questionAmount);
			return true;
		} else return false;
	};
	return (
		<>
			<AlertDialog
				isFullyAnswered={checkIsFullyAnswered()}
				isDialogOpened={isDialogOpened}
				setIsDialogOpened={setIsDialogOpened}
				setIsAnswerSubmitted={setIsAnswerSubmitted}
			/>
			<button
				onClick={() => setIsDialogOpened(true)}
				className={layoutStyles.answerButton}
			>
				Kumpul Jawaban
			</button>
		</>
	);
};

export default SubmitButton;
