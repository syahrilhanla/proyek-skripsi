import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

import SubmitButton from "@/components/common/SubmitButton";
import { Button } from "@material-ui/core";

import MultipleChoices from "@/components/common/MultipleChoices";
import QuestionIndex from "@/components/common/QuestionIndex";

import useGetCurrentPage from "@/components/utils/useGetCurrentPage";
import useSubmitAnswers from "@/components/utils/useSubmitAnswers";
import useCalculateScore from "@/components/utils/useCalculateScore";

import quizStyle from "@/styles/QuizStyle.module.css";

const QuizComponent = ({ questionData, DisplayData, timesUp }) => {
	const { localUserData } = useAuth();
	const router = useRouter();

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
		if (isFinished && parentPath === "evaluasi") {
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
			) {
				// wont show anything if in quiz page
				if (parentPath === "evaluasi")
					return (
						<>
							<h3>
								Kamu sebaiknya mengulang kembali materi sebelumnya! Semangat!
							</h3>
						</>
					);
				else
					return (
						<>
							<h3>
								Kamu sebaiknya mengulang kembali materi sebelumnya! Semangat!
							</h3>
							<Button
								variant={"contained"}
								color='primary'
								onClick={() => {
									router.push(`/${parentPath}/1`);
								}}
							>
								Kembali ke Materi
							</Button>
						</>
					);
			} else
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
		<>
			<div
				key={currentQuestion}
				className={quizStyle.main}
				style={
					isFinished === true
						? { gridTemplateColumns: "1fr" }
						: { gridTemplateColumns: "4fr 5fr 1fr" }
				}
			>
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
			</div>
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
		</>
	);
};

export default QuizComponent;
