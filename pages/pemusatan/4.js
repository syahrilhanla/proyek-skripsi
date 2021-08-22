import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage4 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text1 = () => pemusatanPage4.act1;
	const Text2 = () => pemusatanPage4.act2;

	return <MainLayout Child1={Text1} Child2={Text2} title={"Median"} />;
};

export default page1;
