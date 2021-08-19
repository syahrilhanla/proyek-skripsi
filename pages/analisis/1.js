import React from "react";
import MainLayout from "@/components/common/MainLayout";
import DisplayEquation from "@/components/charts/KatexComponent";
import LearningObjectives from "@/components/common/LearningObjectives";
import { chapter1Objectives } from "@/components/data/objectivesData";
import { analysisPage1 } from "@/components/acts/scrollActs";

const page1 = () => {
	const Text = () => analysisPage1.act;

	const Objectives = () => (
		<div>
			<LearningObjectives objectives={chapter1Objectives} />
		</div>
	);

	return <MainLayout Child1={Text} title={"Apa itu Statistika?"} />;
};

export default page1;
