// TODO in this file:
// # make group detail table header to display dynamically === DONE
// # iterate table header driven by data input === DONE
// # match progress detail with user displayName === DONE
// # iterate user data to be displayed in table dynamically === DONE
// # add button group to choose chapter to display === DONE
// # switch chapter data by selecting button group === DONE
// # add circular progress when fetching data === DONE

import { useEffect, useState } from "react";
import { getUsersDetails } from "@/components/utils/userFirestoreSavings";

import LoadingProgress from "@/components/common/LoadingProgress";

import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { Button, ButtonGroup } from "@material-ui/core";

import groupTableStyles from "@/styles/GroupTable.module.css";

const GroupTable = ({ userList, classCode }) => {
	const [usersData, setUsersData] = useState([]);
	const [chooseChapter, setChooseChapter] = useState("chapter1");
	const [pageAmount, setPageAmount] = useState([]);
	const [actAmount, setActAmount] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getUsersDetails(userList).then((data) => setUsersData(data));
	}, []);

	useEffect(() => {
		if (usersData.length > 0) {
			setPageAmount(getPageAmount(chooseChapter));
			setActAmount(getActivities(chooseChapter));
			setLoading(false);
		}
	}, [usersData, chooseChapter]);

	const getPageAmount = (chapterName) => {
		return usersData[0].progress
			.filter((chapter) => chapter.chapter === chapterName)
			.map((chapterData) =>
				chapterData.data.map((data, index) => {
					return { pageNumber: index + 1, pageLength: data.pageData.length };
				})
			);
	};

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
		if (actAmount.length > 0) {
			const pageLengths = pageAmount[0].map((item) => item.pageLength);
			const sumPageLengths = pageLengths.reduce(
				(prevVal, currentVal) => prevVal + currentVal,
				0
			);
			return sumPageLengths;
		}
	};

	const keyGenerator = (index) => index * Math.random() * 10000;

	const ChapterButton = () => (
		<ButtonGroup variant='contained' aria-label='outlined primary button group'>
			<Button onClick={() => setChooseChapter("chapter1")}>Bab 1</Button>
			<Button onClick={() => setChooseChapter("chapter2")}>Bab 2</Button>
			<Button onClick={() => setChooseChapter("chapter3")}>Bab 3</Button>
		</ButtonGroup>
	);

	const chapterTitle = () => {
		if (chooseChapter === "chapter1") return "Bab 1: Analisis Data";
		else if (chooseChapter === "chapter2")
			return "Bab 2: Ukuran Pemusatan Data";
		else if (chooseChapter === "chapter3")
			return "Bab 3: Ukuran Penyebaran Data";
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
								marginBottom: "1rem",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<ChapterButton />
							<div>
								Ket:{" "}
								<span style={{ backgroundColor: "#C6E0B4", padding: "0.4rem" }}>
									&#10003;
								</span>{" "}
								: Telah Dilakukan
								<span
									style={{
										marginLeft: "0.7rem",
										backgroundColor: "#F8CBAD",
										padding: "0.4rem",
									}}
								>
									-
								</span>{" "}
								: Belum Dilakukan
							</div>
						</div>
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className={`download-table-xls-button ${groupTableStyles.excelButton}`}
							table='table-to-xls'
							filename={`Progress Kelas ${classCode}`}
							sheet={`Progress Kelas ${classCode}`}
							buttonText='Unduh File Excel'
						/>
						<table id='table-to-xls' style={{ marginTop: "1rem" }}>
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
									{pageAmount.length > 0 &&
										pageAmount[0].map((data) => (
											<td
												colSpan={data.pageLength}
												style={{ padding: "0.7rem" }}
												key={data.pageNumber}
											>
												Kegiatan Hal. {data.pageNumber}
											</td>
										))}
								</tr>

								{/* Display activities number in page as header */}
								<tr>
									{actAmount.length > 0 &&
										actAmount[0].progress.map((item) =>
											item.map((data) =>
												data.map((atom, index) => (
													<td key={keyGenerator(index)}>{index + 1}</td>
												))
											)
										)}
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
													{user.score}
												</td>

												{/* display users activities detail */}

												{actAmount.length > 0 &&
													actAmount
														.filter(
															(data) => data.displayName === user.displayName
														)
														.map((result) =>
															result.progress.map((item) =>
																item.map((data) =>
																	data.map((item) => {
																		// console.log(item.name);
																		return (
																			<td
																				key={keyGenerator(index)}
																				style={
																					item.act
																						? { background: "#C6E0B4" }
																						: { background: "#F8CBAD" }
																				}
																			>
																				{item.act ? <p>&#10003;</p> : "-"}
																			</td>
																		);
																	})
																)
															)
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
