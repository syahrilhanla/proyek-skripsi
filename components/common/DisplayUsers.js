import { useState, useEffect } from "react";
import { getAllUserProgress } from "@/components/utils/userFirestoreSavings";

const DisplayUsers = () => {
	const [data, setData] = useState([]);

	useEffect(() => getAllUserProgress().then((data) => setData(data)), []);

	console.log(data);
	return (
		<div>
			{data.map((item) => {
				return <p key={item.displayName}>{item.displayName}</p>;
			})}
		</div>
	);
};

export default DisplayUsers;
