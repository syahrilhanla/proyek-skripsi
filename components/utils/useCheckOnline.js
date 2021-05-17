import { useState, useEffect } from "react";

const useCheckOnline = () => {
	const [open, setOpen] = useState(false);

	useEffect(() => {
		const setOnline = () => setOpen(false);
		const setOffline = () => setOpen(true);

		// check if user online
		window.addEventListener("offline", setOffline);
		window.addEventListener("online", setOnline);

		return () => console.log("finished rendering");
	}, []);

	return open;
};

export default useCheckOnline;
