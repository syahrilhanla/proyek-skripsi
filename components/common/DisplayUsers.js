import { useState, useEffect } from "react";
import { getAllUserProgress } from "@/components/utils/userFirestoreSavings";
import UserCard from "@/components/common/UserCard";

const DisplayUsers = ({ selectedClass }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		let isMounted = true;
		getAllUserProgress().then((data) => {
			if (isMounted) setData(data);
		});

		return () => (isMounted = false);
	}, []);

	const filteredUsers = (selectedClass) => {
		return data.filter((item) => {
			return item.className === selectedClass;
		});
	};

	return (
		<div>
			{selectedClass !== "Pilih Kelas" && (
				<h2 style={{ fontWeight: 400 }}>Kelas {selectedClass}</h2>
			)}
			{filteredUsers(selectedClass).map((userData) => (
				<UserCard userData={userData} key={userData.uid} />
			))}
		</div>
	);
};

export default DisplayUsers;
