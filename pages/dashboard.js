import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import CircularProgressWithLabel from "@/components/common/ProgressCircularBar";
import LearningProgress from "@/components/common/LearningProgress";

import progressStyles from "@/styles/Progress.module.css";
import dashboardStyles from "@/styles/Dashboard.module.css";

import useProgressValues from "@/components/utils/useProgressValues";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const dashboard = () => {
	const progressValues = useProgressValues();
	const { isAdmin } = useAuth();
	const router = useRouter();

	// If the user is an admin, it will redirect from dashboard page to admin page
	useEffect(() => {
		console.log("an admin");
		if (isAdmin) return () => router.push("/admin");
	}, []);

	return (
		<>
			{isAdmin === false &&
				progressValues.userInfo &&
				progressValues.pageReady === true && <DisplayDashboard />}
		</>
	);

	function DisplayDashboard() {
		return (
			<div className={progressStyles.mainProgress}>
				<Navbar />
				<DashboardContent displayInfo={progressValues.userInfo} />
				<UserProgress progressValues={progressValues.setProgressValues()} />
				<Footer />
			</div>
		);
	}
};

function UserProgress({ progressValues }) {
	console.log(
		progressValues.chapter1Percentage.percentage,
		progressValues.chapter1Percentage.score
	);
	return (
		<section className={progressStyles.progressSection}>
			<div className={progressStyles.container}>
				<h1>Progres Saya</h1>
				<LearningProgress
					text={"Menganalisis Data"}
					percentageValue={progressValues.chapter1Percentage.percentage}
					overallAction={`${progressValues.chapter1Percentage.score}/${progressValues.chapter1Percentage.actLength}`}
				/>
				<LearningProgress
					text={"Ukuran Pemusatan"}
					percentageValue={progressValues.chapter2Percentage.percentage}
					overallAction={`${progressValues.chapter2Percentage.score}/${progressValues.chapter2Percentage.actLength}`}
				/>
				<LearningProgress
					text={"Ukuran Penyebaran"}
					percentageValue={progressValues.chapter3Percentage.percentage}
					overallAction={`${progressValues.chapter3Percentage.score}/${progressValues.chapter3Percentage.actLength}`}
				/>
			</div>
		</section>
	);
}

function DashboardContent({ displayInfo }) {
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
					<div className={dashboardStyles.infoContainer}>
						<div className={dashboardStyles.profileName}>
							<h1>{displayInfo.displayName}</h1>
							<p>{displayInfo.className}</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default dashboard;
