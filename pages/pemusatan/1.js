import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage1 } from "@/components/acts/scrollActs";
import { pemusatanPage2 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => pemusatanPage1.act;
	const Data = () => pemusatanPage2.data;

	return (
		<MainLayout
			Child1={Data}
			Child2={Text}
			title={"Ukuran Pemusatan Data"}
			scrollActID={pemusatanPage1.id}
		/>
	);
};

export default page1;
