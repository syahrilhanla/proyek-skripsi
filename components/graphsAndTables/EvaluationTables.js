import React from "react";
import tableStyle from "@/styles/TableStyle.module.css";

export const FishTable = () => {
	function data() {
		return [
			{
				no: 1,
				size: "Lundu",
				percentage: 64,
			},
			{
				no: 2,
				size: "Papuyu",
				percentage: 32,
			},
			{
				no: 3,
				size: "Sepat",
				percentage: 46,
			},
			{
				no: 4,
				size: "Gapi",
				percentage: 26,
			},
		];
	}
	const tableData = data();

	return (
		<div>
			<table className={tableStyle.mainTable}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>No</th>
						<th className={tableStyle.tableHead}>Jenis Ikan</th>
						<th className={tableStyle.tableHead}>Jumlah (ekor)</th>
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

export const BaungTable = () => {
	function data() {
		return [
			{
				no: 1,
				size: "14",
				percentage: 200,
			},
			{
				no: 2,
				size: "15",
				percentage: 500,
			},
			{
				no: 3,
				size: "16",
				percentage: 300,
			},
			{
				no: 4,
				size: "17",
				percentage: 200,
			},
		];
	}
	const tableData = data();

	return (
		<div>
			<table className={tableStyle.mainTable}>
				<thead>
					<tr>
						<th className={tableStyle.tableHead}>No</th>
						<th className={tableStyle.tableHead}>Panjang</th>
						<th className={tableStyle.tableHead}>Jumlah (ekor)</th>
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
