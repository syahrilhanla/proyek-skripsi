import HomeNavbar from "../components/HomeNavbar";
import React from "react";
import { SectionA, SectionB, SectionC } from "../components/Sections";
import Footer from "../components/Footer";

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
