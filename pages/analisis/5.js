import MainLayout from "@/components/common/MainLayout";
import TableOne from "@/components/graphsAndTables/TableOne";
import { firstQuestion } from "@/components/data/shortEssayData";
import { analysisPage5 } from "@/components/acts/scrollActs";

const page3 = () => {
	const Text = () => analysisPage5.act;

	return (
		<>
			<MainLayout
				Child1={TableOne}
				Child2={Text}
				title={"Ayo Mencoba!"}
				essayQuestion={firstQuestion}
			/>
		</>
	);
};

export default page3;
