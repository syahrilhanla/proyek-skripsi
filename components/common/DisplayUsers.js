import { useState } from "react";
import UserCard from "@/components/common/UserCard";
import { Button, Switch } from "@material-ui/core";
import GroupTable from "@/components/common/GroupTable";

import DisplayUserStyle from "@/styles/DisplayUsers.module.css";

const DisplayUsers = ({ selectedClass, userList }) => {
	// if true then display individual progress
	const [individualChecked, setIndividualChecked] = useState(true);
	const [isEditMode, setIsEditMode] = useState(false);

	const handleChange = () => {
		setIndividualChecked(!individualChecked);
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
					{individualChecked && (
						<Button
							variant={isEditMode ? "outlined" : "contained"}
							color='secondary'
							className={DisplayUserStyle.editButton}
							onClick={() => setIsEditMode(!isEditMode)}
						>
							Edit User
						</Button>
					)}
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
							checked={individualChecked}
						/>
						<span>Individu</span>
					</div>

					{individualChecked ? (
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
