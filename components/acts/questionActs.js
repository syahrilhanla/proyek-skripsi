import Chapter1Line from "@/components/graphsAndTables/Chapter1Line";
import DisplayEquation from "@/components/charts/KatexComponent";
import Image from "next/image";
import Caption from "@/components/common/Caption";

export const questionDataAnalysisPage4 = {
	questions: [
		{
			id: "act2",
			questionText: "Itik A menghasilkan telur terbanyak pada tahun....",
			answerChoices: [
				{
					answerText: "Tahun 2",
					isCorrect: true,
				},
				{
					answerText: "Tahun 3",
					isCorrect: false,
				},
			],
		},
		{
			id: "act3",
			questionText:
				"Itik yang bertelur paling sedikit di tahun pertama adalah....",
			answerChoices: [
				{
					answerText: "Itik A",
					isCorrect: false,
				},
				{
					answerText: "Itik B",
					isCorrect: true,
				},
			],
		},
	],
	Data: () => (
		<>
			<Chapter1Line />
			<div
				style={{
					display: "grid",
					placeItems: "center",
					gridTemplateColumns: "1fr",
					marginBottom: "0.5rem",
					marginTop: "0.5rem",
				}}
			>
				<Image src={"/itikAlabio.png"} width={360} height={240} quality={100} />
				<div style={{ marginTop: "0.5rem" }}>
					<Caption>Gambar 1-3: Itik Alabio</Caption>
					<Caption>Sumber: bptupelaihari.ditjenpkh.pertanian.go.id</Caption>
				</div>
			</div>
		</>
	),
};

export const questionDataPemusatanPage4 = {
	questions: [
		{
			id: "act2",
			questionText:
				"Rumus yang digunakan untuk menemukan median berdasarkan data di atas adalah....",
			answerChoices: [
				{
					answerText: (
						<DisplayEquation
							displayMode={"block"}
						>{`\\frac{banyak data + 1}{2}`}</DisplayEquation>
					),
					isCorrect: true,
				},
				{
					answerText: (
						<DisplayEquation
							displayMode={"block"}
						>{`\\frac{nilai\\, data\\, ke\\,-\\frac{n}{2} + nilai\\, data\\, ke-\\,\\frac{n}{2} + 1}{2}`}</DisplayEquation>
					),
					isCorrect: false,
				},
			],
		},
	],
	Data: () => (
		<p style={{ wordSpacing: "2rem", textAlign: "center", fontSize: "larger" }}>
			45 46 43 41 72 84 43 43 40 39
		</p>
	),
};

export const questionDataPenyebaranPage3 = {
	questions: [
		{
			id: "act2",
			questionText: "Letak kuartil ketiga berada pada posisi data di....",
			answerChoices: [
				{
					answerText: "50%",
					isCorrect: false,
				},
				{
					answerText: "75%",
					isCorrect: true,
				},
			],
		},
	],
};
