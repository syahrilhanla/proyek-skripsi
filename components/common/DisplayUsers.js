import { useState, useEffect } from "react";
import { getAllUserProgress } from "@/components/utils/userFirestoreSavings";

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

	console.log(filteredUsers(selectedClass).map((item) => item.displayName));
	return (
		<div>
			{filteredUsers(selectedClass).map((item) => {
				console.log(item.displayName);
				return <p key={item.displayName}>{item.displayName}</p>;
			})}
		</div>
	);
};

export default DisplayUsers;
