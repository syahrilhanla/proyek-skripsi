import React from "react";
import tableStyle from "@/styles/TableStyle.module.css";

const TableTwo = () => {
	const tableData = data();

	return (
		<div>
			<table className={tableStyle.mainTable}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>No</th>
						<th className={tableStyle.tableHead}>Ukuran (cm)</th>
						<th className={tableStyle.tableHead}>
							Persentase Banyaknya Ikan(%)
						</th>
					</tr>
				</thead>

				<tbody>
					{tableData.map((item) => (
						<tr key={item.no}>
							<td>{item.no}</td>
							<td>{item.size}</td>
							<td>{item.percentage}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export function data() {
	return [
		{
			no: 1,
			size: "4,0 – 5,5",
			percentage: 2,
		},
		{
			no: 2,
			size: "5,5 – 7,0",
			percentage: 10,
		},
		{
			no: 3,
			size: "7,1 – 8,5",
			percentage: 50,
		},
		{
			no: 4,
			size: "8,6 – 10,0",
			percentage: 30,
		},
		{
			no: 5,
			size: "10,1 – 11,5",
			percentage: 8,
		},
	];
}

export default TableTwo;
