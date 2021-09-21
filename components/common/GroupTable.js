import { useEffect, useState } from "react";
import { getUsersDetails } from "@/components/utils/userFirestoreSavings";

const GroupTable = ({ userList }) => {
	const [allDetails, setAllDetails] = useState([]);
	useEffect(() => {
		getUsersDetails(userList);
	}, []);

	useEffect(() => console.log(allDetails), [allDetails]);

	console.table(userList);
	return (
		<div>
			<table style={{ border: "black 1px solid" }}>
				<thead>
					<tr>
						<td rowspan='3'>No</td>
						<td rowspan='3'>Nama</td>
						<td rowspan='3'>Skor</td>
						<td colspan='25'>Bab 1: Analisis Data</td>
					</tr>
					<tr>
						<td colspan='5'>Halaman 1</td>
						<td colspan='5'>Halaman 2</td>
						<td colspan='5'>Halaman 3</td>
						<td colspan='5'>Halaman 4</td>
						<td colspan='5'>Halaman 5</td>
					</tr>
					<tr>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
						<td>1</td>
						<td>2</td>
						<td>3</td>
						<td>4</td>
						<td>5</td>
					</tr>
				</thead>
				<tbody>
					{userList.map((user, index) => {
						return (
							<tr>
								<td>{index + 1}</td>
								<td>{user.displayName}</td>
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
