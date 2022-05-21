import { useEffect, useState } from "react";
import {
	getAnswerKey,
	getUsersDetails,
} from "@/components/utils/userFirestoreSavings";

import LoadingProgress from "@/components/common/LoadingProgress";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Button, ButtonGroup } from "@material-ui/core";

import groupTableStyles from "@/styles/GroupTable.module.css";

const QuizTable = ({ userList, classCode }) => {
	const [usersData, setUsersData] = useState([]);
	const [chooseChapter, setChooseChapter] = useState("chapter1");
	const [loading, setLoading] = useState(true);
	const [answerKey, setAnswerKey] = useState([]);

	useEffect(() => {
		getUsersDetails(userList).then((data) => setUsersData(data));
		getAnswerKey(chooseChapter).then((results) =>
			setAnswerKey(results.answerKey)
		);
	}, [chooseChapter]);

	useEffect(() => {
		if (usersData.length > 0 && answerKey.length > 0) {
			setLoading(false);
		}
	}, [usersData]);

	const keyGenerator = (index) => index * Math.random() * 10000;

	const getAnswerAmount = () => {
		if (answerKey.length > 0) return answerKey.map((item) => item.number);
	};

	const getOverallColSpan = () => {
		if (answerKey.length > 0) {
			return answerKey.length;
		}
	};

	const pickChapterData = (user, chooseChapter) => {
		switch (chooseChapter) {
			case "chapter1":
				return user.analisisQuiz;
			case "chapter2":
				return user.pemusatanQuiz;
			case "chapter3":
				return user.penyebaranQuiz;
			default:
				return user.analisisQuiz;
		}
	};

	const AnswerResults = ({ user }) => {
		console.log({ user });
		// making default answers array, then push users existing answer to this array
		const newAnswers = answerKey.map((item, index) => {
			return { number: index, answer: " - ", isTrue: false };
		});

		if (pickChapterData(user, chooseChapter)) {
			pickChapterData(user, chooseChapter).quizData.overallAnswers.forEach(
				(answer) => {
					newAnswers.forEach((item, indexDefault) => {
						if (item.number === answer.number) {
							newAnswers[indexDefault] = answer;
						}
					});
				}
			);
		}

		return newAnswers.length > 0 ? (
			newAnswers.map((answer, index) => (
				<td
					key={keyGenerator(index)}
					style={
						answer.isTrue
							? { background: "#C6E0B4" }
							: { background: "#F8CBAD" }
					}
				>
					{answer.answer}
				</td>
			))
		) : (
			<td colSpan={getOverallColSpan()}>Belum Melakukan Evaluasi</td>
		);
		// }
	};

	const ChapterButton = () => (
		<ButtonGroup variant='contained' aria-label='outlined primary button group'>
			<Button onClick={() => setChooseChapter("chapter1")}>Kuis 1</Button>
			<Button onClick={() => setChooseChapter("chapter2")}>Kuis 2</Button>
			<Button onClick={() => setChooseChapter("chapter3")}>Kuis 3</Button>
		</ButtonGroup>
	);

	const chapterTitle = () => {
		if (chooseChapter === "chapter1") return "Kuis 1: Analisis Data";
		else if (chooseChapter === "chapter2")
			return "Kuis 2: Ukuran Pemusatan Data";
		else if (chooseChapter === "chapter3")
			return "Kuis 3: Ukuran Penyebaran Data";
	};

	return (
		<>
			<div className={groupTableStyles.motherDiv}>
				{loading ? (
					<LoadingProgress />
				) : (
					<>
						<div
							style={{
								width: "full",
								display: "flex",
								justifyItems: "start",
								margin: "0.8rem 0",
							}}
						>
							<ChapterButton />
						</div>
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className={`download-table-xls-button ${groupTableStyles.excelButton}`}
							table='table-to-xls'
							filename={`Jawaban Evaluasi Kelas ${classCode}`}
							sheet={`Jawaban Evaluasi Kelas ${classCode}`}
							buttonText='Unduh File Excel'
						/>
						<table id='table-to-xls' style={{ marginTop: "1rem" }}>
							<thead className={groupTableStyles.header}>
								{/* table header for general users detail */}
								<tr>
									<td rowSpan={3}>No</td>
									<td rowSpan={3}>Nama</td>
									<td rowSpan={3}>Skor</td>
									<td colSpan={getOverallColSpan()}>
										Rekap Jawaban {chapterTitle()}
									</td>
								</tr>

								{/* display the amount of pages column based on passed data */}
								<tr>
									{getAnswerAmount().map((data) => (
										<td style={{ padding: "0.7rem" }} key={data}>
											{data + 1}
										</td>
									))}
								</tr>

								{/* Display activities number in page as header */}
								<tr>
									{answerKey.length > 0 &&
										answerKey.map((item) => (
											<td key={keyGenerator(item.number)}>{item.trueAnswer}</td>
										))}
								</tr>
							</thead>

							<tbody>
								{/* display users general information like names and score */}
								{userList.map((user, index) => {
									return (
										<>
											<tr>
												<td
													key={keyGenerator(index)}
													style={{ padding: "0 0.7rem" }}
												>
													{index + 1}
												</td>
												<td
													key={user.displayName}
													style={{
														minWidth: "6rem",
														padding: "0 0.7rem",
														textTransform: "capitalize",
													}}
												>
													{user.displayName}
												</td>
												<td
													key={keyGenerator(index)}
													style={{ padding: "0 0.7rem" }}
												>
													{pickChapterData(user, chooseChapter)?.quizData.score
														? pickChapterData(user, chooseChapter)?.quizData
																.score
														: " - "}
												</td>
												{/* display users activities detail */}
												{!pickChapterData(user, chooseChapter)?.quizData
													.score ? (
													<td colSpan={getOverallColSpan()}>
														Belum Mengerjakan Quiz
													</td>
												) : (
													<AnswerResults user={user} />
												)}
											</tr>
										</>
									);
								})}
							</tbody>
						</table>
					</>
				)}
			</div>
		</>
	);
};

export default QuizTable;
