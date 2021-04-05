import React from "react";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import CircularProgressWithLabel from "@/components/common/ProgressCircularBar";
import LearningProgress from "@/components/common/LearningProgress";

import progressStyles from "@/styles/Progress.module.css";
import dashboardStyles from "@/styles/Dashboard.module.css";

import { useAuth } from "@/components/context/AuthContext";

const dashboard = () => {
	const { localUserData } = useAuth();

	return <>{localUserData && <DisplayDashboard />}</>;

	function DisplayDashboard() {
		return (
			<div className={progressStyles.mainProgress}>
				<Navbar />
				<DashboardContent displayName={localUserData.displayName} />
				<UserProgress />
				<Footer />
			</div>
		);
	}
};

function UserProgress() {
	return (
		<section className={progressStyles.progressSection}>
			<div className={progressStyles.container}>
				<h1>Progres Saya</h1>
				<LearningProgress
					text={"Menganalisis Data"}
					percentageValue={80}
					overallAction={"8/10"}
				/>
				<LearningProgress
					text={"Ukuran Pemusatan"}
					percentageValue={70}
					overallAction={"7/10"}
				/>
				<LearningProgress
					text={"Ukuran Penyebaran"}
					percentageValue={60}
					overallAction={"6/10"}
				/>
			</div>
		</section>
	);
}

function DashboardContent({ displayName }) {
	console.log(displayName);
	return (
		<section className={dashboardStyles.dashboard}>
			<div className={dashboardStyles.profile}>
				<div className={dashboardStyles.backgroundPicture}></div>
				<div className={dashboardStyles.container}>
					<div className={dashboardStyles.progress}>
						<div className={dashboardStyles.progressBar}>
							<CircularProgressWithLabel value={70} />
						</div>
						<div>
							<h3>21/30 Kegiatan Tuntas</h3>
						</div>
					</div>
					<div className={dashboardStyles.profileName}>
						<h2>{displayName}</h2>
					</div>
				</div>
			</div>
		</section>
	);
}

export default dashboard;
