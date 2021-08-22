import MainLayout from "@/components/common/MainLayout";
import LearningObjectives from "@/components/common/LearningObjectives";
import { chapter2Objectives } from "@/components/data/objectivesData";
import { analysisPage1 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => analysisPage1.act;

	return <MainLayout Child1={Text} title={"Apa itu Statistika?"} />;
};

export default page1;
