import MainLayout from "@/components/common/MainLayout";
import { penyebaranPage3 } from "@/components/acts/scrollActs";
import { questionDataPenyebaranPage3 } from "@/components/acts/questionActs";

const page1 = () => {
	const Text = () => penyebaranPage3.act;

	return (
		<MainLayout
			Child1={Text}
			title={"Kuartil"}
			questionData={questionDataPenyebaranPage3}
			scrollActID={penyebaranPage3.id}
		/>
	);
};

export default page1;
