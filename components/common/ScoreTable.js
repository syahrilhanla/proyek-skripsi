import { useEffect, useState } from "react";
import {
	getAnswerKey,
	getUsersDetails,
} from "@/components/utils/userFirestoreSavings";

import { Button, ButtonGroup } from "@material-ui/core";
import LoadingProgress from "@/components/common/LoadingProgress";

import groupTableStyles from "@/styles/GroupTable.module.css";

const GroupTable = ({ userList }) => {
	const [usersData, setUsersData] = useState([]);
	const [chooseChapter, setChooseChapter] = useState("chapter1");
	const [pageAmount, setPageAmount] = useState([]);
	const [actAmount, setActAmount] = useState([]);
	const [loading, setLoading] = useState(true);
	const [answerKey, setAnswerKey] = useState([]);

	useEffect(() => {
		getUsersDetails(userList).then((data) => setUsersData(data));
		getAnswerKey().then((results) => setAnswerKey(results.answerKey));
	}, []);

	useEffect(() => {
		if (usersData.length > 0) {
			setPageAmount(getPageAmount(chooseChapter));
			setActAmount(getActivities(chooseChapter));
			setLoading(false);
		}
	}, [usersData, chooseChapter]);

	const keyGenerator = (index) => index * Math.random() * 10000;

	const ChapterButton = () => (
		<ButtonGroup variant='contained' aria-label='outlined primary button group'>
			<Button onClick={() => setChooseChapter("chapter1")}>Bab 1</Button>
			<Button onClick={() => setChooseChapter("chapter2")}>Bab 2</Button>
			<Button onClick={() => setChooseChapter("chapter3")}>Bab 3</Button>
		</ButtonGroup>
	);

	const chapterTitle = () => {
		if (chooseChapter === "chapter1") return "Jawaban Bab 1: Analisis Data";
		else if (chooseChapter === "chapter2")
			return "Jawaban  Bab 2: Ukuran Pemusatan Data";
		else if (chooseChapter === "chapter3")
			return "Jawaban Bab 3: Ukuran Penyebaran Data";
	};

	const getPageAmount = (chapterName) => {
		// return usersData[0].progress
		// 	.filter((chapter) => chapter.chapter === chapterName)
		// 	.map((chapterData) =>
		// 		chapterData.data.map((data, index) => {
		// 			return { pageNumber: index + 1, pageLength: data.pageData.length };
		// 		})
		// 	);
	};

	const getAnswerAmount = () => {
		// console.log(answerKey);
		if (answerKey.length > 0) return answerKey.map((item) => item.number);
	};

	console.log(getAnswerAmount());

	const getActivities = (chapterName) => {
		return usersData.map((data) => {
			const results = {
				displayName: data.displayName,
				progress: data.progress
					.filter((chapter) => chapter.chapter === chapterName)
					.map((chapterData) =>
						chapterData.data.map((data) =>
							data.pageData.map((item, index) => item)
						)
					),
			};
			// console.log(results);
			return results;
		});
	};

	const getOverallColSpan = () => {
		if (answerKey.length > 0) {
			return answerKey.length;
		}
	};

	const Misc = () => (
		<div
			style={{
				marginBottom: "1rem",
				display: "flex",
				justifyContent: "space-between",
			}}
		>
			<ChapterButton />
			<div>
				Ket:{" "}
				<span style={{ backgroundColor: "#C6E0B4", padding: "0.4rem" }}>O</span>{" "}
				: Telah Dilakukan
				<span
					style={{
						marginLeft: "0.7rem",
						backgroundColor: "#F8CBAD",
						padding: "0.4rem",
					}}
				>
					X
				</span>{" "}
				: Belum Dilakukan
			</div>
		</div>
	);

	const AnswerResults = ({ user }) => {
		console.log({ user });
		// making default answers array, then push users existing answer to this array
		const newAnswers = answerKey.map((item, index) => {
			return { number: index, answer: " - ", isTrue: false };
		});

		if (newAnswers.length > 0) {
			if (user.overallAnswers !== undefined && user.overallAnswers.length > 0) {
				user.overallAnswers.forEach((answer) => {
					newAnswers.forEach((item, indexDefault) => {
						if (item.number === answer.number) {
							newAnswers[indexDefault] = answer;
						}
					});
				});
				console.log({ newAnswers });

				return newAnswers.map((answer, index) => (
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
				));
			}
		}
	};

	return (
		<>
			<div className={groupTableStyles.motherDiv}>
				{loading ? (
					<LoadingProgress />
				) : (
					<>
						<Misc />
						<table>
							<thead className={groupTableStyles.header}>
								{/* table header for general users detail */}
								<tr>
									<td rowSpan={3}>No</td>
									<td rowSpan={3}>Nama</td>
									<td rowSpan={3}>Skor</td>
									<td colSpan={getOverallColSpan()}>{chapterTitle()}</td>
								</tr>

								{/* display the amount of pages column based on passed data */}
								<tr>
									{getAnswerAmount().map((data) => (
										<td style={{ padding: "0.7rem" }} key={data}>
											{data}
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
													{user.hasDoneQuiz ? user.score : " - "}
												</td>
												{/* display users activities detail */}
												{!user.hasDoneQuiz ? (
													<td colspan={getOverallColSpan()}>
														Belum Melakukan Evaluasi
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

export default GroupTable;
