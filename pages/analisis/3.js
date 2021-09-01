import MainLayout from "@/components/common/MainLayout";
import { firstQuestion } from "@/components/data/shortEssayData";
import { analysisPage3 } from "@/components/acts/scrollActs";

const page3 = () => {
	const Text = () => analysisPage3.act;

	const Data = () => analysisPage3.data;

	return (
		<>
			<MainLayout
				Child1={Data}
				Child2={Text}
				title={"Menganalisis Tabel"}
				essayQuestion={firstQuestion}
				scrollActID={analysisPage3.id}
			/>
		</>
	);
};

export default page3;
