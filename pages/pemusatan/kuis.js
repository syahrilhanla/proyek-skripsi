import MainLayout from "@/components/common/MainLayout";
import QuizComponent from "@/components/common/QuizComponent";
import { questionData } from "@/components/data/quiz2Data";
import Caption from "@/components/common/Caption";
import DataColumn from "@/components/charts/DataColumn";
import {
	FirstData,
	KasturiHarvesting,
	MedianFrequency,
} from "@/components/graphsAndTables/Chapter2QuizData";

const quiz1 = () => {
	// needed to display data on QuizComponent
	// takes number as argument from questionData array being set in QuizComponent
	const DisplayData = ({ currentQuestion }) => {
		const displayDataDynamically = (currentQuestion) => {
			// display first chart of the quiz, which is used by question 1 & 2
			if (currentQuestion < 2) {
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 1-2</Caption>
						<FirstData />
					</>
				);
			}
			// display first chart of the quiz, which is used by question 3-4, and so on...
			else if (currentQuestion < 4) {
				const arr = [
					15, 18, 19, 20, 18, 15, 20, 15, 18, 16, 19, 15, 16, 19, 16, 15, 20,
					17, 17, 17, 17, 15, 15, 18, 18, 19, 18, 19, 20, 16, 17, 17, 19, 15,
					18, 16,
				];
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 3-4</Caption>
						<DataColumn arrList={arr} />
					</>
				);
			} else if (currentQuestion < 7) {
				return (
					<>
						<Caption>Data berikut digunakan untuk pertanyaan no 5-7</Caption>
						<p>
							Bambang seorang petani yang ingin menggolongkan hasil panen buah
							kasturinya untuk dijual berdasarkan berat per buah. Hasil
							keseluruhan yang ia dapatkan beragam dalam satuan kwintal, mulai
							dari 90-120 gram per buahnya (satuan gram terdekat). Buah yang
							dapat dijual ke luar daerah hanya yang memiliki berat di atas
							nilai median. Berikut merupakan data hasil panen tersebut.
						</p>
						<KasturiHarvesting />
					</>
				);
			} else if (currentQuestion > 8) {
				return (
					<>
						<MedianFrequency />
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
		<MainLayout Child1={DisplayQuiz} title={"Kuis Ukuran Pemusatan Data"} />
	);
};

export default quiz1;
