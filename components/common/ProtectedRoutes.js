// USED TO PROTECT SOME ADDRESS FROM UNSIGNED USERS
// USERS NEED TO BE SIGNED IN FIRST TO ACCESS THE CONTENTS AND DASHBOARD

import { useEffect } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { useRouter } from "next/router";

const ProtectedRoutes = ({ children }) => {
	const router = useRouter();
	const { localUserData, isAdmin } = useAuth();

	const publicLinks = ["/perihal"];
	const currentLink = router.pathname;

	useEffect(() => {
		if (!localUserData && currentLink.includes(publicLinks)) {
			// do nothing if theres no localUser and the route is public
		} else if (localUserData && currentLink === "/" && isAdmin) {
			// redirect to admin page if user goes to home when user logs in as admin
			router.push("/admin");
		} else if (localUserData && currentLink === "/dashboard" && isAdmin) {
			// redirect to admin page if user goes to dashboard when user logs in as admin
			router.push("/admin");
		} else if (localUserData && currentLink === "/") {
			// redirect to dashboard if user goes to home when there's localUser
			router.push("/dashboard");
		} else if (!localUserData && currentLink !== "/") {
			// redirect to home if there is no localUser and the route is not public
			router.push("/");
		}
	});

	return children;
};

export default ProtectedRoutes;
