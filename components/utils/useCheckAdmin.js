// USED IN AuthContext.js TO VALIDATE IF USER IS ADMIN
// IF YES, THEN PUSHED TO ADMIN PAGE AND DISPLAY FOR ADMIN

const useCheckAdmin = (data) => {
	if (data) {
		if (data.displayName === "syahril hanla") return true;
		else return false;
	} else return false;
};

export default useCheckAdmin;
