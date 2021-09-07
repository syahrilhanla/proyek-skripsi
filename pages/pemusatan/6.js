import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage6 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => pemusatanPage6.act;
	const Data = () => pemusatanPage6.data;

	return <MainLayout Child1={Data} Child2={Text} title={"Modus"} />;
};

export default page1;
