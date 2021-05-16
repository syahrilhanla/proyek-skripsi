import OfflineNotification from "@/components/common/OfflineNotification";
import useCheckOnline from "@/components/utils/useCheckOnline";

import "@/styles/globals.css";
import AuthProvider from "@/components/context/AuthContext";
import ProtectedRoutes from "@/components/common/ProtectedRoutes";
import ProgressProvider from "@/components/context/ProgressContext";

function MyApp({ Component, pageProps }) {
	const open = useCheckOnline();

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
