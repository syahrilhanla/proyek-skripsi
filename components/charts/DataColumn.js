import dataStyles from "@/styles/DataStyles.module.css";

const DataColumn = ({ arrList }) => {
	return (
		<div className={dataStyles.blueTableData}>
			{arrList.map((number) => (
				<span className={dataStyles.spanElement}>{number}</span>
			))}
		</div>
	);
};

export default DataColumn;
