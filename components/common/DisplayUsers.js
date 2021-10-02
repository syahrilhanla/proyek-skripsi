import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import { Button, Switch } from "@material-ui/core";
import GroupTable from "@/components/common/GroupTable";

import DisplayUserStyle from "@/styles/DisplayUsers.module.css";

const DisplayUsers = ({ selectedClass, userList }) => {
	// if true then display individual progress
	const [checked, setChecked] = useState(true);
	const [isEditMode, setIsEditMode] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<div>
			{selectedClass !== "Pilih Kelas" && (
				<div className={DisplayUserStyle.classInfo}>
					<span>
						<h2>Kelas {selectedClass.className}</h2>
						<h3>Password: {selectedClass.password}</h3>
					</span>
					{/* <button>Edit User</button> */}
					<Button
						variant='contained'
						color='secondary'
						className={DisplayUserStyle.editButton}
						onClick={() => setIsEditMode(!isEditMode)}
					>
						Edit User
					</Button>
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
							<UserCard
								userData={userData}
								key={userData.uid}
								isEditMode={isEditMode}
							/>
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
