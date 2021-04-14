import HomeNavbar from "@/components/common/HomeNavbar";
import React from "react";
import { SectionA, SectionB, SectionC } from "@/components/common/Sections";
import Footer from "@/components/common/Footer";

export default function Home() {
	return (
		<div style={{ position: "relative" }}>
			<HomeNavbar />
			<SectionA />
			<SectionB />
			<SectionC />
			<Footer />
		</div>
	);
}
