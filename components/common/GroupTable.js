import { useEffect, useState } from "react";
import { getUsersDetails } from "@/components/utils/userFirestoreSavings";

import groupTableStyles from "@/styles/GroupTable.module.css";

const GroupTable = ({ userList }) => {
	const [usersData, setUsersData] = useState([]);
	const [pageAmount, setPageAmount] = useState([]);
	const [actAmount, setActAmount] = useState([]);

	const getPageAmount = (chapterName) => {
		return usersData[0]
			.filter((chapter) => chapter.chapter === chapterName)
			.map((chapterData) =>
				chapterData.data.map((data, index) => {
					return { pageNumber: index + 1, pageLength: data.pageData.length };
				})
			);
	};

	const getActivities = (chapterName) => {
		return usersData[0]
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

	// console.table(userList);

	// TODO in this file:
	// # make group detail table to display
	// # iterate table data driven by data input

	return (
		<div className={groupTableStyles.motherDiv}>
			<table>
				<thead>
					{/* table header for general users detail */}
					<tr>
						<td rowSpan={3}>No</td>
						<td rowSpan={3}>Nama</td>
						<td rowSpan={3}>Skor</td>
						<td colSpan={25}>Bab 1: Analisis Data</td>
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
									Hal {data.pageNumber}
								</td>
							))}
					</tr>

					{/* Display activities number in page as header */}
					<tr>
						{/* {usersData.length > 0 &&
							usersData[0]
								.filter((chapter) => chapter.chapter === "chapter1")
								.map((chapterData) =>
									chapterData.data.map((data) => {
										data.pageData.map((item, index) => {
											return <td>{item.name}</td>;
										});
									})
								)} */}
						{actAmount.length > 0 && console.log(actAmount)}
					</tr>
				</thead>

				<tbody>
					{/* display users general information like names and score */}
					{userList.map((user, index) => {
						return (
							<>
								<tr>
									<td>{index + 1}</td>
									<td style={{ minWidth: "6rem" }}>{user.displayName}</td>
									<td>{user.score}</td>
									{/* {usersData.length > 0 &&
									usersData
										// .filter((chapter) => chapter.chapter === "chapter1")
										.map((chapterData) =>
											chapterData.map((data) => {
												console.log(data.data);
												// data.pageData.map((item) => (
												// 	<td
												// 		colSpan={item.length}
												// 		style={{ padding: "0.7rem" }}
												// 	>
												// 		{item.name}
												// 	</td>
												// ));
											})
										)} */}
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
