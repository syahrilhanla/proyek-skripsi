import MainLayout from "@/components/common/MainLayout";
import { penyebaranPage5 } from "@/components/acts/scrollActs";
import { chapter3Page5 } from "@/components/data/shortEssayData";

const page1 = () => {
	const Text1 = () => (
		<div>
			<>{penyebaranPage5.act}</>
		</div>
	);
	const Data = () => penyebaranPage5.data;

	return (
		<MainLayout
			Child1={Data}
			Child2={Text1}
			title={"Jangkauan Antar Kuartil"}
			essayQuestion={chapter3Page5}
			scrollActID={penyebaranPage5.id}
		/>
	);
};

export default page1;
