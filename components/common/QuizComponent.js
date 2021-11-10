import React, { useState, useEffect } from "react";

import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

import SubmitButton from "@/components/common/SubmitButton";

import MultipleChoices from "@/components/common/MultipleChoices";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";
import useCalculateScore from "@/components/utils/useCalculateScore";

import quizStyle from "@/styles/QuizStyle.module.css";
import QuestionIndex from "@/components/common/QuestionIndex";
import useSubmitAnswers from "@/components/utils/useSubmitAnswers";

const QuizComponent = ({ questionData, DisplayData, timesUp }) => {
	const { localUserData } = useAuth();

	const { quizScore, setQuizScore } = useProgress();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isFinished, setIsFinished] = useState(false);
	const [overallAnswers, setOverallAnswers] = useState([]);

	const { parentPath, pushTo } = useGetCurrentPage();
	const { getScoreThreshold, getScoringTotal, calculateResults } =
		useCalculateScore();

	useEffect(
		() => calculateResults(overallAnswers, setQuizScore),
		[overallAnswers]
	);

	useEffect(() => {
		if (currentQuestion < 1) setQuizScore(0);
		if (isFinished) {
			useSubmitAnswers(
				questionData.length,
				quizScore,
				overallAnswers,
				localUserData
			);
		}
	}, [isFinished]);

	const DisplayScore = ({ quizScore }) => {
		const DisplayFinish = () => {
			if (
				getScoreThreshold(
					getScoringTotal(quizScore, questionData.length),
					questionData.length
				)
			)
				return <h3>Kamu sebaiknya mengulang kembali materi sebelumnya</h3>;
			else
				return (
					<div>
						<h3>Kamu bisa lanjut ke materi berikutnya!</h3>
						<button
							className={quizStyle.answerButton}
							key={quizScore}
							onClick={() => pushTo(parentPath)}
						>
							Materi Berikutnya
						</button>
					</div>
				);
		};

		return (
			<div style={{ margin: "auto", textAlign: "center" }}>
				<h3>
					Skor yang kamu peroleh adalah{" "}
					{getScoringTotal(quizScore, questionData.length)} dari 100!
				</h3>
				{<DisplayFinish />}
			</div>
		);
	};

	return (
		<div key={currentQuestion} className={quizStyle.main}>
			{!isFinished && !timesUp ? (
				<DisplayData currentQuestion={currentQuestion} />
			) : null}
			{/* {console.log(quizScore)} */}
			<div
				key={currentQuestion}
				className={quizStyle.questionDisplay}
				style={{ maxWidth: "75%" }}
			>
				{!isFinished && !timesUp ? (
					<MultipleChoices
						questionData={questionData}
						setCurrentQuestion={setCurrentQuestion}
						setIsFinished={setIsFinished}
						currentQuestion={currentQuestion}
						overallAnswers={overallAnswers}
						setOverallAnswers={setOverallAnswers}
					/>
				) : null}
			</div>
			{parentPath === "evaluasi" && timesUp && (
				<h2 style={{ textAlign: "center", display: "block", width: "100%" }}>
					Waktu Habis
				</h2>
			)}
			{(isFinished || timesUp) && <DisplayScore quizScore={quizScore} />}

			{!isFinished && !timesUp && (
				<QuestionIndex
					setCurrentQuestion={setCurrentQuestion}
					questionData={questionData}
					overallAnswers={overallAnswers}
				/>
			)}
			{!isFinished && (
				<div className={quizStyle.submitButton}>
					{parentPath === "evaluasi" && !timesUp && (
						<SubmitButton
							questionAmount={questionData.length}
							overallAnswers={overallAnswers}
							quizScore={quizScore}
							setIsFinished={setIsFinished}
							localUserData={localUserData}
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default QuizComponent;
