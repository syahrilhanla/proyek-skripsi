import MainLayout from "@/components/common/MainLayout";
import QuizComponent from "@/components/common/QuizComponent";
import { questionData } from "@/components/data/quiz1Data";
import Caption from "@/components/common/Caption";
import {
	FishTable,
	RiverTable,
} from "@/components/graphsAndTables/Chapter1QuizData";

const quiz1 = () => {
	// needed to display data on QuizComponent
	// takes number as argument from questionData array being set in QuizComponent
	const DisplayData = ({ currentQuestion }) => {
		const displayDataDynamically = (currentQuestion) => {
			// display first chart of the quiz, which is used by question 1 and so on...
			if (currentQuestion < 1) {
				return (
					<>
						<RiverTable />
					</>
				);
			} else if (currentQuestion < 3) {
				return (
					<>
						<Caption>
							Data berikut digunakan untuk pertanyaan nomor 2 dan 3
						</Caption>
						<FishTable />
					</>
				);
			} else return null;
		};

		return (
			<div
				style={{
					maxWidth: "75%",
				}}
			>
				{displayDataDynamically(currentQuestion)}
			</div>
		);
	};

	const DisplayQuiz = () => (
		<QuizComponent questionData={questionData} DisplayData={DisplayData} />
	);

	return <MainLayout Child1={DisplayQuiz} title={"Kuis Analisis Data"} />;
};

export default quiz1;
