import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

import CircularProgressWithLabel from "@/components/common/ProgressCircularBar";
import LearningProgress from "@/components/common/LearningProgress";

import progressStyles from "@/styles/Progress.module.css";
import dashboardStyles from "@/styles/Dashboard.module.css";

import useProgressValues from "@/components/utils/useProgressValues";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import UserNewClassModal from "@/components/common/UserNewClassModal";

const dashboard = () => {
	const progressValues = useProgressValues();
	const { isAdmin } = useAuth();
	const router = useRouter();
	const [newClass, setNewClass] = useState(false);
	const [userClass, setUserClass] = useState("Belum Masuk Kelas");

	// If the user is an admin, it will redirect from dashboard page to admin page
	useEffect(() => {
		if (isAdmin) return () => router.push("/admin");
	}, []);

	// useEffect(() => {
	// 	if (progressValues.pageReady) {
	// 		setUserClass(progressValues.userInfo.className);
	// 	} else return;
	// }, [progressValues]);

	useEffect(() => {
		console.log(userClass);
		if (userClass !== "Belum Masuk Kelas") console.log("changed");
	}, [userClass]);

	return (
		<>
			{isAdmin === false &&
				progressValues.userInfo &&
				progressValues.pageReady === true && <DisplayDashboard />}
			{newClass && (
				<UserNewClassModal
					setNewClass={setNewClass}
					setUserClass={setUserClass}
				/>
			)}
		</>
	);

	function DisplayDashboard() {
		return (
			<div className={progressStyles.mainProgress}>
				<Navbar />
				<DashboardContent
					displayInfo={progressValues.userInfo}
					acts={progressValues.displayOverallProgress()}
					setNewClass={setNewClass}
					userClass={userClass}
				/>
				<UserProgress progressValues={progressValues.setProgressValues()} />
				<Footer />
			</div>
		);
	}
};

function UserProgress({ progressValues }) {
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

function DashboardContent({ displayInfo, acts, setNewClass, userClass }) {
	return (
		<section className={dashboardStyles.dashboard}>
			<div className={dashboardStyles.profile}>
				<div className={dashboardStyles.backgroundPicture}></div>
				<div className={dashboardStyles.container}>
					<div className={dashboardStyles.progress}>
						<div className={dashboardStyles.progressBar}>
							<CircularProgressWithLabel value={acts.overallPercentage} />
						</div>
						<div>
							<h3>{acts.overallText}</h3>
						</div>
					</div>
					<div className={dashboardStyles.infoContainer}>
						<div className={dashboardStyles.profileName}>
							<h1>{displayInfo.displayName}</h1>
							{displayInfo.className === "Belum Masuk Kelas" &&
							userClass === "Belum Masuk Kelas" ? (
								<p
									onClick={() => setNewClass(true)}
									style={{ cursor: "pointer" }}
								>
									Klik Untuk Masuk Kelas
								</p>
							) : displayInfo.className !== "Belum Masuk Kelas" ? (
								<p>{displayInfo.className}</p>
							) : userClass !== "Belum Masuk Kelas" ? (
								<p>{userClass}</p>
							) : null}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default dashboard;
