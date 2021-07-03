import MainLayout from "@/components/common/MainLayout";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/router";

import DisplayCountDown from "@/components/common/DisplayCountDown";

const admin = () => {
	const { isAdmin } = useAuth();
	const router = useRouter();

	const NotAdminStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};

	const NotAdmin = () => {
		setTimeout(() => router.push("/dashboard"), 3000);

		return (
			<div style={NotAdminStyle}>
				<div>
					<h2>Maaf, anda bukan admin. </h2>
				</div>
				<div>
					<h4>
						Mengarahkan ke <i>dashboard</i>...
						<span>{<DisplayCountDown timeSet={3} />}</span>
					</h4>
				</div>
			</div>
		);
	};

	const Text = () => (
		<div style={{ padding: "0.8rem" }}>
			<h2>This is an admin page</h2>
		</div>
	);
	return (
		<>
			{isAdmin ? (
				<>
					<MainLayout Child1={Text} title={"Menganalisis Data"} />
				</>
			) : (
				<NotAdmin />
			)}
		</>
	);
};

export default admin;
