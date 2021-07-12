import MainLayout from "@/components/common/MainLayout";
import QuizComponent from "@/components/common/QuizComponent";
import { questionData } from "@/components/data/quiz1Data";
import TableOne from "@/components/graphsAndTables/TableOne";
import TableTwo from "@/components/graphsAndTables/TableTwo";
import Caption from "@/components/common/Caption";
import EvaluationCountDown from "@/components/common/EvaluationCountDown";

const evaluation = () => {
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

		console.log("rendering evalution");
		return (
			<div style={{ margin: "auto 0px" }}>
				{displayDataDynamically(currentQuestion)}
			</div>
		);
	};

	const DisplayQuiz = () => (
		<QuizComponent questionData={questionData} DisplayData={DisplayData} />
	);

	return (
		<>
			<MainLayout Child1={DisplayQuiz} />{" "}
			<span style={{ alignSelf: "center" }}>
				<EvaluationCountDown />
			</span>
		</>
	);
};

export default evaluation;
