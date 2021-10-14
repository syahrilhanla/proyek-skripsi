import MainLayout from "@/components/common/MainLayout";
import { penyebaranPage1 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => penyebaranPage1.act;
	const Data = () => penyebaranPage1.data;

	return (
		<MainLayout
			Child1={Data}
			Child2={Text}
			title={"Ukuran Penyebaran Data"}
			scrollActID={penyebaranPage1.id}
		/>
	);
};

export default page1;
