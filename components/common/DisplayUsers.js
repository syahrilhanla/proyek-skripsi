import { useState, useEffect } from "react";
import { getAllUserProgress } from "@/components/utils/userFirestoreSavings";
import UserCard from "@/components/common/UserCard";

const DisplayUsers = ({ selectedClass }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		let unmount = false;
		if (!unmount) getAllUserProgress().then((data) => setData(data));
		return () => (unmount = true);
	}, [selectedClass]);

	console.log(data);

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
				<UserCard userData={userData} />
			))}
		</div>
	);
};

export default DisplayUsers;
