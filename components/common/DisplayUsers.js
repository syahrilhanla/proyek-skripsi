import { useState } from "react";

const DisplayUsers = ({ usersData }) => {
	const [data, setData] = useState([]);
	usersData.then((item) => setData(item));
	return (
		<div>
			{data.map((item) => {
				return <p>{item.displayName}</p>;
			})}
		</div>
	);
};

export default DisplayUsers;
