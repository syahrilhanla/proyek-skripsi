import MainLayout from "@/components/common/MainLayout";
import { pemusatanPage6 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => pemusatanPage6.act;

	return <MainLayout Child1={Text} title={"Modus"} />;
};

export default page1;
