import { useRouter } from "next/router";

import DisplayCountDown from "@/components/common/DisplayCountDown";

const NotAdmin = () => {
	const NotAdminStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};
	const router = useRouter();

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

export default NotAdmin;
