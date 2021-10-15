import { useState } from "react";

import { useProgress } from "@/components/context/ProgressContext";
import { useAuth } from "@/components/context/AuthContext";

import MainLayout from "@/components/common/MainLayout";
import QuizComponent from "@/components/common/QuizComponent";
import evaluationQuiz from "@/components/data/evaluationQuiz";
import EvaluationCountDown from "@/components/common/EvaluationCountDown";
import Caption from "@/components/common/Caption";

import {
	BaungTable,
	FishTable,
} from "@/components/graphsAndTables/EvaluationTables";
import {
	MedianFrequency,
	ModusEvaluation,
	RattanLength,
	ShrimpCatch,
	SouthBorneoFish,
} from "@/components/graphsAndTables/EvaluationQuizData";

const evaluation = () => {
	const [timesUp, setTimesUp] = useState(false);

	const { isEvaluationOpen } = useProgress();
	const { userInfo, userClass } = useAuth();

	// needed to display data on QuizComponent
	// takes number as argument from questionData array being set in QuizComponent
	const DisplayData = ({ currentQuestion }) => {
		const displayDataDynamically = (currentQuestion) => {
			// display first chart of the quiz, which is used by question 1
			if (currentQuestion < 1) {
				return (
					<>
						<FishTable />
					</>
				);
			}
			// display first chart of the quiz, which is used by question 2-5
			else if (currentQuestion < 5) {
				return (
					<>
						<Caption>
							Data berikut digunakan untuk pertanyaan no 2 sampai 5
						</Caption>
						<BaungTable />
					</>
				);
			} else if (currentQuestion < 7) {
				return (
					<>
						<Caption>
							Data berikut digunakan untuk pertanyaan no 6 dan 7
						</Caption>
						<SouthBorneoFish />
					</>
				);
			} else if (currentQuestion > 7 && currentQuestion < 10) {
				return (
					<>
						<Caption>
							Data berikut digunakan untuk pertanyaan no 9 dan 10
						</Caption>
						<ModusEvaluation />
					</>
				);
			} else if (currentQuestion < 12) {
				return (
					<>
						<Caption>
							Data berikut digunakan untuk pertanyaan no 9 dan 10
						</Caption>
						<MedianFrequency />
					</>
				);
			} else if (currentQuestion < 13) {
				return (
					<>
						<ShrimpCatch />
					</>
				);
			} else if (currentQuestion < 15) {
				return (
					<>
						<Caption>
							Data berikut digunakan untuk pertanyaan no 14 dan 15
						</Caption>
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
		<QuizComponent
			questionData={evaluationQuiz}
			DisplayData={DisplayData}
			timesUp={timesUp}
		/>
	);

	// console.log({ userClass });

	const LockedDisplay = () => {
		// console.log({ userInfo });
		return (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					height: "30vh",
				}}
			>
				<h2 style={{ fontWeight: "400" }}>
					{userInfo.className !== "Belum Masuk Kelas" ||
					userClass !== "Belum Masuk Kelas"
						? "Fitur Evaluasi sedang terkunci"
						: "Masuk Kelas Terlebih Dahulu di Halaman Dashboard Profil"}
				</h2>
				<h2 style={{ fontWeight: "400" }}>
					{userInfo.className !== "Belum Masuk Kelas" ||
					userClass !== "Belum Masuk Kelas"
						? "Hubungi Admin untuk membuka fitur"
						: null}
				</h2>
			</div>
		);
	};

	return (
		<>
			{userInfo && (
				<>
					<MainLayout
						Child1={
							(isEvaluationOpen &&
								userInfo.className !== "Belum Masuk Kelas") ||
							(userClass !== "Belum Masuk Kelas" && isEvaluationOpen)
								? DisplayQuiz
								: LockedDisplay
						}
						title={"Evaluasi Akhir"}
					/>
					{(isEvaluationOpen && userInfo.className !== "Belum Masuk Kelas") ||
					(userClass !== "Belum Masuk Kelas" && isEvaluationOpen) ? (
						<EvaluationCountDown setTimesUp={setTimesUp} />
					) : null}
				</>
			)}
		</>
	);
};

export default evaluation;
