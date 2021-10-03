// USED IN AuthContext.js TO VALIDATE IF USER IS ADMIN
// IF YES, THEN PUSHED TO ADMIN PAGE AND DISPLAY FOR ADMIN

import { getAllAdminData } from "@/components/utils/userFirestoreSavings";

const useCheckAdmin = async (data) => {
	if (data) {
		const adminList = await getAllAdminData();

		// checking through adminList, whether adminList contains authenticated email
		const isAdmin = adminList.some((result) => result.email === data.email);
		console.log({ isAdmin });
		return isAdmin;
	} else return false;
};

export default useCheckAdmin;
