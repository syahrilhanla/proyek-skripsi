import MainLayout from "@/components/common/MainLayout";
import QuizComponent from "@/components/common/QuizComponent";
import { questionData } from "@/components/data/quiz1Data";
import Caption from "@/components/common/Caption";
import {
	DuckPie,
	FishTable,
	RiverCatch,
	RiverTable,
	SnakeHeadLine,
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
			} else if (currentQuestion < 5) {
				return (
					<>
						<Caption>
							Data berikut digunakan untuk pertanyaan nomor 4 dan 5
						</Caption>
						<p>
							Diagram berikut merupakan data dari hasil tangkapan nelayan di
							sungai wilayah Banjarmasin dan sekitarnya yang bersumber dari
							BPSKB (Badan Pusat Statistik Kota Banjarmasin)
						</p>
						<RiverCatch />
					</>
				);
			} else if (currentQuestion < 8) {
				return (
					<>
						<Caption>
							Data pada tabel berikut digunakan untuk menjawab soal nomor 6
							sampai 8
						</Caption>
						<p>
							Di bawah merupakan diagram garis untuk menampilkan pertumbuhan
							dari ukuran Ikan Gabus (cm) per 30 hari. Amati dan analisis data
							tersebut untuk menjawab pertanyaan yang diberikan.
						</p>
						<SnakeHeadLine />
					</>
				);
			} else if (currentQuestion < 10) {
				return (
					<>
						<Caption>
							Data pada tabel berikut digunakan untuk menjawab soal nomor 9 dan
							10
						</Caption>
						<p>
							Seorang petani di lahan gambut memiliki sebuah peternakan itik
							Alabio. Peternakan tersebut terdiri dari 100 ekor itik dengan
							pendapatan pasti 100 butir telur per harinya. Namun sebagian itik
							milik petani tersebut terkena penyakit dan sekarang gagal
							bertelur. Data ini ditampilkan pada diagram lingkaran di bawah.
						</p>
						<DuckPie />
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
