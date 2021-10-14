import React from "react";
import tableStyle from "@/styles/TableStyle.module.css";

const TableOne = () => {
	const tableData = data();

	return (
		<div style={{ margin: "auto" }}>
			<table className={tableStyle.mainTable}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>No</th>
						<th className={tableStyle.tableHead}>Umur Benih (Hari)</th>
						<th className={tableStyle.tableHead}>Panjang (cm)</th>
					</tr>
				</thead>

				<tbody>
					{tableData.map((item) => (
						<tr key={item.no}>
							<td>{item.no}</td>
							<td>{item.age}</td>
							<td>{item.size}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

function data() {
	return [
		{
			no: 1,
			age: 60,
			size: "4-5",
		},
		{
			no: 2,
			age: 90,
			size: "5-6",
		},
		{
			no: 3,
			age: 120,
			size: "6-7",
		},
		{
			no: 4,
			age: 150,
			size: "7-8",
		},
	];
}

export default TableOne;
