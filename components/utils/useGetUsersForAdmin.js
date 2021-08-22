import { useState, useEffect } from "react";
import { getAllUserProgress } from "@/components/utils/userFirestoreSavings";

const useGetUserForAdmin = (selectedClass) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		let isMounted = true;
		getAllUserProgress().then((data) => {
			if (isMounted) setData(data);
		});

		return () => (isMounted = false);
	}, []);

	const filterUsers = (selectedClass) => {
		return data.filter((item) => {
			return item.className === selectedClass;
		});
	};

	const filteredUsers = filterUsers(selectedClass);

	return { filteredUsers };
};

export default useGetUserForAdmin;
