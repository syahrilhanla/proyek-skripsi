import MainLayout from "@/components/common/MainLayout";
import { penyebaranPage6 } from "@/components/acts/scrollActs";
import { chapter3Page6 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text1 = () => (
		<div>
			<>{penyebaranPage6.act}</>
		</div>
	);

	const Data = () => penyebaranPage6.data;

	return (
		<MainLayout
			Child2={Text1}
			Child1={Data}
			title={"Simpangan Kuartil"}
			essayQuestion={chapter3Page6}
			scrollActID={penyebaranPage6.id}
		/>
	);
};

export default page1;
