import MainLayout from "@/components/common/MainLayout";
import QuizComponent from "@/components/common/QuizComponent";
import { questionData } from "@/components/data/quiz3Data";
import Caption from "@/components/common/Caption";
import { MedianFrequency } from "@/components/graphsAndTables/Chapter2QuizData";
import {
	FishCatch,
	RattanLength,
} from "@/components/graphsAndTables/Chapter3QuizData";

const quiz1 = () => {
	// needed to display data on QuizComponent
	// takes number as argument from questionData array being set in QuizComponent
	const DisplayData = ({ currentQuestion }) => {
		const displayDataDynamically = (currentQuestion) => {
			// display first chart of the quiz, which is used by question 1-4
			if (currentQuestion < 4) {
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 1-4</Caption>
						<MedianFrequency />
					</>
				);
			}
			// display first chart of the quiz, which is used by question 5-7 and so on...
			else if (currentQuestion < 7) {
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 5-7</Caption>
						<FishCatch />
					</>
				);
			} else if (currentQuestion < 10) {
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 8-10</Caption>
						<RattanLength />
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
		<QuizComponent questionData={questionData} DisplayData={DisplayData} />
	);

	return (
		<MainLayout Child1={DisplayQuiz} title={"Kuis Ukuran Penyebaran Data"} />
	);
};

export default quiz1;
