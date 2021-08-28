import React from "react";
import MainLayout from "@/components/common/MainLayout";
import TableOne from "@/components/graphsAndTables/TableOne";
import { firstQuestion } from "@/components/data/shortEssayData";
import { analysisPage3 } from "@/components/acts/scrollActs";

const page3 = () => {
	const Text = () => analysisPage3.act;

	return (
		<>
			<MainLayout
				Child1={TableOne}
				Child2={Text}
				title={"Menganalisis Tabel"}
				essayQuestion={firstQuestion}
				scrollActID={analysisPage3.id}
			/>
		</>
	);
};

export default page3;
