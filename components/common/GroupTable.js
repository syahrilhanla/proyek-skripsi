import { useEffect, useState } from "react";
import { getUsersDetails } from "@/components/utils/userFirestoreSavings";

import groupTableStyles from "@/styles/GroupTable.module.css";

const GroupTable = ({ userList }) => {
	const [usersData, setUsersData] = useState([]);
	const [pageAmount, setPageAmount] = useState([]);
	const [actAmount, setActAmount] = useState([]);

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
		return usersData[0].progress
			.filter((chapter) => chapter.chapter === chapterName)
			.map((chapterData) =>
				chapterData.data.map((data) => data.pageData.map((item, index) => item))
			);
	};

	useEffect(() => {
		getUsersDetails(userList).then((data) => setUsersData(data));
	}, []);

	useEffect(() => {
		if (usersData.length > 0) {
			setPageAmount(getPageAmount("chapter1"));
			setActAmount(getActivities("chapter1"));
		}
	}, [usersData]);

	const keyGenerator = (index) => index * Math.random() * 10000;

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

	// console.table(userList);

	// TODO in this file:
	// # make group detail table header to display dynamically === DONE
	// # iterate table header driven by data input === DONE
	// # iterate user data to be displayed in table dynamically

	return (
		<div className={groupTableStyles.motherDiv}>
			<table>
				<thead className={groupTableStyles.header}>
					{/* table header for general users detail */}
					<tr>
						<td rowSpan={3}>No</td>
						<td rowSpan={3}>Nama</td>
						<td rowSpan={3}>Skor</td>
						<td colSpan={getOverallColSpan()}>Bab 1: Analisis Data</td>
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
							actAmount[0].map((item) =>
								item.map((data, index) => (
									<td key={keyGenerator(index)}>{index + 1}</td>
								))
							)}
					</tr>
				</thead>

				<tbody>
					{/* display users general information like names and score */}
					{userList.map((user, index) => {
						return (
							<>
								<tr>
									<td key={index + 1} style={{ padding: "0 0.7rem" }}>
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
									<td key={keyGenerator(index)} style={{ padding: "0 0.7rem" }}>
										{user.score}
									</td>

									{/* display users activities detail */}

									{actAmount.length > 0 &&
										actAmount[0].map((item) =>
											item.map((data, index) => (
												<td
													key={keyGenerator(index)}
													style={
														data.act
															? { background: "#C6E0B4" }
															: { background: "#F8CBAD" }
													}
												>
													{data.act ? "O" : "X"}
												</td>
											))
										)}
								</tr>
							</>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default GroupTable;
