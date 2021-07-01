const useCheckAdmin = (data) => {
	if (data) {
		console.log(data);
		if (data.displayName === "syahril hanla") {
			console.log("you are logged in as admin");
			return true;
		} else return false;
	} else return false;
};

export default useCheckAdmin;
