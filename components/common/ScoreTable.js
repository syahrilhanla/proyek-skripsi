import { useEffect, useState } from "react";
import {
	getAnswerKey,
	getUsersDetails,
} from "@/components/utils/userFirestoreSavings";

import LoadingProgress from "@/components/common/LoadingProgress";

import groupTableStyles from "@/styles/GroupTable.module.css";

const GroupTable = ({ userList }) => {
	const [usersData, setUsersData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [answerKey, setAnswerKey] = useState([]);

	useEffect(() => {
		getUsersDetails(userList).then((data) => setUsersData(data));
		getAnswerKey().then((results) => setAnswerKey(results.answerKey));
	}, []);

	useEffect(() => {
		if (usersData.length > 0) {
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

	const AnswerResults = ({ user }) => {
		// console.log({ user });
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
						<table>
							<thead className={groupTableStyles.header}>
								{/* table header for general users detail */}
								<tr>
									<td rowSpan={3}>No</td>
									<td rowSpan={3}>Nama</td>
									<td rowSpan={3}>Skor</td>
									<td colSpan={getOverallColSpan()}>
										{"Kunci Jawaban Evaluasi"}
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
