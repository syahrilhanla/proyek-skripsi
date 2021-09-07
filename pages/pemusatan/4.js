import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage4 } from "@/components/acts/scrollActs";
import { questionDataPemusatanPage4 } from "@/components/acts/questionActs";

const page1 = () => {
	const Text1 = () => pemusatanPage4.act1;
	const Text2 = () => pemusatanPage4.act2;

	return (
		<MainLayout
			Child1={Text1}
			Child2={Text2}
			title={"Median"}
			scrollActID={pemusatanPage4.id}
			questionData={questionDataPemusatanPage4}
		/>
	);
};

export default page1;
