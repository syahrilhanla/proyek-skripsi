import { useState } from "react";

import MainLayout from "@/components/common/MainLayout";
import QuizComponent from "@/components/common/QuizComponent";
import evaluationQuiz from "@/components/data/evaluationQuiz";
import TableOne from "@/components/graphsAndTables/TableOne";
import TableTwo from "@/components/graphsAndTables/TableTwo";
import EvaluationCountDown from "@/components/common/EvaluationCountDown";
import Caption from "@/components/common/Caption";

const evaluation = () => {
	const [timesUp, setTimesUp] = useState(false);

	// needed to display data on QuizComponent
	// takes number as argument from questionData array being set in QuizComponent
	const DisplayData = ({ currentQuestion }) => {
		const displayDataDynamically = (currentQuestion) => {
			// display first chart of the quiz, which is used by question 1 & 2
			if (currentQuestion < 2) {
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 1-2</Caption>
						<TableOne />
					</>
				);
			}
			// display first chart of the quiz, which is used by question 3-4
			else if (currentQuestion < 4) {
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 3</Caption>
						<TableTwo />
					</>
				);
			} else return null;
		};

		return (
			<div style={{ margin: "auto 0px" }}>
				{displayDataDynamically(currentQuestion)}
			</div>
		);
	};

	const DisplayQuiz = () => (
		<QuizComponent
			questionData={evaluationQuiz}
			DisplayData={DisplayData}
			timesUp={timesUp}
		/>
	);

	return (
		<>
			<MainLayout Child1={DisplayQuiz} title={"Evaluasi Akhir"} />
			<EvaluationCountDown setTimesUp={setTimesUp} />
		</>
	);
};

export default evaluation;
