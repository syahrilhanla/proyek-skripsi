import React, { useState, useEffect } from "react";
import SubmitButton from "@/components/common/SubmitButton";

import { useProgress } from "@/components/context/ProgressContext";
import MultipleChoices from "@/components/common/MultipleChoices";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import quizStyle from "@/styles/QuizStyle.module.css";
import QuestionIndex from "@/components/common/QuestionIndex";

const QuizComponent = ({ questionData, DisplayData, timesUp }) => {
	const { quizScore, setQuizScore } = useProgress(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const { parentPath } = useGetCurrentPage();

	useEffect(() => {
		if (currentQuestion < 1) setQuizScore(0);
	}, [isFinished]);

	const DisplayScore = ({ quizScore }) => {
		const DisplayFinish = () => {
			if (quizScore < questionData.length / quizScore)
				return <h3>Kamu sebaiknya mengulang kembali materi sebelumnya</h3>;
			else
				return (
					<div>
						<h3>Kamu bisa lanjut ke materi berikutnya!</h3>
						<button className={quizStyle.answerButton} key={quizScore}>
							Materi Berikutnya
						</button>
					</div>
				);
		};
		return (
			<div style={{ margin: "auto", textAlign: "center" }}>
				<h3>
					Skor yang kamu peroleh adalah {quizScore} dari{" "}
					{questionData.length * 10}!
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

			<div key={currentQuestion} className={quizStyle.questionDisplay}>
				{!isFinished && !timesUp ? (
					<MultipleChoices
						questionData={questionData}
						setQuizScore={setQuizScore}
						setCurrentQuestion={setCurrentQuestion}
						setIsFinished={setIsFinished}
						currentQuestion={currentQuestion}
					/>
				) : null}
			</div>
			{parentPath === "evaluasi" && timesUp && (
				<h2 style={{ textAlign: "center", display: "block", width: "100%" }}>
					Waktu Habis
				</h2>
			)}
			{(isFinished || timesUp) && <DisplayScore quizScore={quizScore} />}

			{parentPath === "evaluasi" && !isFinished && !timesUp && (
				<QuestionIndex setCurrentQuestion={setCurrentQuestion} />
			)}
			<>
				<div className={quizStyle.submitButton}>
					{parentPath === "evaluasi" && !timesUp && (
						<SubmitButton quizScore={quizScore} />
					)}
				</div>
				{/* <span style={{ alignSelf: "center", width: "100%" }}>
					<EvaluationCountDown setTimesUp={setTimesUp} />
				</span> */}
			</>
		</div>
	);
};

export default QuizComponent;
