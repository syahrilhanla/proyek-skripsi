import React, { useState } from "react";
import SubmitButton from "@/components/common/SubmitButton";

import { useProgress } from "@/components/context/ProgressContext";
import MultipleChoices from "@/components/common/MultipleChoices";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import quizStyle from "@/styles/QuizStyle.module.css";

const QuizComponent = ({ questionData, DisplayData, timesUp }) => {
	const { quizScore, setQuizScore } = useProgress();
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [isFinished, setIsFinished] = useState(false);

	const { parentPath } = useGetCurrentPage();

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

	console.log(timesUp);

	return (
		<div key={currentQuestion} className={quizStyle.main}>
			{!isFinished && <DisplayData currentQuestion={currentQuestion} />}

			{parentPath === "evaluasi" && timesUp && (
				<div style={{ textAlign: "center" }}>
					<h2>Waktu Habis</h2>
				</div>
			)}

			<div key={currentQuestion} className={quizStyle.questionDisplay}>
				{!isFinished && (
					<MultipleChoices
						questionData={questionData}
						setQuizScore={setQuizScore}
						setCurrentQuestion={setCurrentQuestion}
						setIsFinished={setIsFinished}
						currentQuestion={currentQuestion}
					/>
				)}
				{isFinished && <DisplayScore quizScore={quizScore} />}
			</div>
			{parentPath === "evaluasi" && <SubmitButton quizScore={quizScore} />}
		</div>
	);
};

export default QuizComponent;
