import UserCard from "@/components/common/UserCard";

const DisplayUsers = ({ selectedClass, userList }) => {
	return (
		<div>
			{selectedClass !== "Pilih Kelas" && (
				<h2 style={{ fontWeight: 400 }}>Kelas {selectedClass}</h2>
			)}
			{userList.map((userData) => (
				<UserCard userData={userData} key={userData.uid} />
			))}
		</div>
	);
};

export default DisplayUsers;
