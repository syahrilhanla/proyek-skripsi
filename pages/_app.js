import { useEffect, useState } from "react";

import OfflineNotification from "@/components/common/OfflineNotification";

import "@/styles/globals.css";
import AuthProvider from "@/components/context/AuthContext";
import ProtectedRoutes from "@/components/common/ProtectedRoutes";
import ProgressProvider from "@/components/context/ProgressContext";

function MyApp({ Component, pageProps }) {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const setOnline = () => setOpen(false);
		const setOffline = () => setOpen(true);

		// check if user online
		window.addEventListener("offline", setOffline);
		window.addEventListener("online", setOnline);

		return () => console.log("finished rendering");
	}, []);

	return (
		<AuthProvider>
			<ProgressProvider>
				<ProtectedRoutes>
					{open && <OfflineNotification open={open} />}
					<Component {...pageProps} />
				</ProtectedRoutes>
			</ProgressProvider>
		</AuthProvider>
	);
}

export default MyApp;
