import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import DisplayCountDown from "@/components/common/DisplayCountDown";

const NotAdmin = () => {
	const router = useRouter();
	const [pushToDashboard, setPushToDashboard] = useState(false);
	const NotAdminStyle = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};

	useEffect(() => {
		if (pushToDashboard) {
			router.push("/dashboard");
		}
	}, [pushToDashboard]);

	return (
		<div style={NotAdminStyle}>
			<div>
				<h2>Maaf, anda bukan admin. </h2>
			</div>
			<div>
				<h4>
					Mengarahkan ke <i>dashboard</i>...
					<span>
						{<DisplayCountDown timeSet={3} setCallback={setPushToDashboard} />}
					</span>
				</h4>
			</div>
		</div>
	);
};

export default NotAdmin;
