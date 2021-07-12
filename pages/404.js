import React from "react";
import { useRouter } from "next/router";
import DisplayCountDown from "@/components/common/DisplayCountDown";

const custom404 = () => {
	const router = useRouter();

	setTimeout(() => router.push("/"), 3000);

	const invalidAddress = {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
	};

	return (
		<div style={invalidAddress}>
			<div>
				<h2>Oops... Alamat Salah</h2>
			</div>
			<div>
				<h4>
					Mengarahkan ke beranda...
					<span>{<DisplayCountDown timeSet={3} />}</span>
				</h4>
			</div>
		</div>
	);
};

export default custom404;
