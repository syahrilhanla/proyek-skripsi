import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage6 } from "@/components/acts/scrollActs";
import { chapter2Page6 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text = () => pemusatanPage6.act;
	const Data = () => pemusatanPage6.data;

	return (
		<MainLayout
			Child1={Data}
			Child2={Text}
			title={"Modus"}
			essayQuestion={chapter2Page6}
			scrollActID={pemusatanPage6.id}
		/>
	);
};

export default page1;
