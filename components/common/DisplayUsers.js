import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import { Switch } from "@material-ui/core";
import GroupTable from "@/components/common/GroupTable";

const DisplayUsers = ({ selectedClass, userList }) => {
	// if true then display individual progress
	const [checked, setChecked] = useState(true);

	const handleChange = () => {
		setChecked(!checked);
	};

	console.log(selectedClass);
	return (
		<div>
			{selectedClass !== "Pilih Kelas" && (
				<div style={{ display: "flex", justifyContent: "space-between" }}>
					<h2 style={{ fontWeight: 400 }}>Kelas {selectedClass.className}</h2>
					<h3 style={{ fontWeight: 400 }}>
						Password: {selectedClass.password}
					</h3>
				</div>
			)}

			{userList.length > 0 ? (
				<>
					<div>
						<span>Tabel Grup</span>
						<Switch
							defaultChecked
							size='medium'
							color='primary'
							onChange={handleChange}
							checked={checked}
						/>
						<span>Individu</span>
					</div>

					{checked ? (
						userList.map((userData) => (
							<UserCard userData={userData} key={userData.uid} />
						))
					) : (
						<GroupTable userList={userList} />
					)}
				</>
			) : (
				<h3 style={{ fontWeight: 400, textAlign: "center" }}>
					Tidak Ada Siswa di Kelas Ini
				</h3>
			)}
		</div>
	);
};

export default DisplayUsers;
