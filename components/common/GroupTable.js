import { useEffect, useState } from "react";
import { getUsersDetails } from "@/components/utils/userFirestoreSavings";

const GroupTable = ({ userList }) => {
	const [usersData, setUsersData] = useState([]);

	useEffect(() => {
		getUsersDetails(userList).then((data) => setUsersData(data));
	}, []);

	console.table(userList);

	// TODO in this file:
	// # make group detail table to display
	// # iterate table data driven by data input
	return (
		<div
			style={{
				padding: "1rem",
				overflowX: "auto",
				width: "90%",
				border: "black 1px solid",
				textAlign: "center",
			}}
		>
			<table>
				<thead>
					<tr>
						<td rowSpan={3}>No</td>
						<td rowSpan={3}>Nama</td>
						<td rowSpan={3}>Skor</td>
						<td colSpan={25}>Bab 1: Analisis Data</td>
					</tr>
					{/* <tr>
						<td colSpan='5'>Halaman 1</td>
						<td colSpan='5'>Halaman 2</td>
						<td colSpan='5'>Halaman 3</td>
						<td colSpan='5'>Halaman 4</td>
						<td colSpan='5'>Halaman 5</td>
					</tr> */}
					<tr></tr>
					<tr>
						{console.table(usersData)}
						{usersData.length > 0 &&
							usersData[0]
								// .filter((chapter) => chapter.chapter === "chapter1")
								.map((chapterData) =>
									chapterData.data.map((data, index) => {
										console.log(data);
										return (
											<td
												colSpan={chapterData.length}
												style={{ padding: "0.7rem" }}
											>
												Hal {index + 1}
											</td>
										);
									})
								)}
					</tr>
				</thead>

				<tbody>
					{userList.map((user, index) => {
						return (
							<tr>
								<td>{index + 1}</td>
								<td style={{ minWidth: "6rem" }}>{user.displayName}</td>
								<td>{user.score}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default GroupTable;
