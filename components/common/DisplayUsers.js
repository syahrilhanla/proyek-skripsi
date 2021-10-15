import { useState } from "react";
import { Button, Switch } from "@material-ui/core";
import UserCard from "@/components/common/UserCard";
import GroupTable from "@/components/common/GroupTable";

import { openEvaluationSwitch } from "@/components/utils/userFirestoreSavings";

import DisplayUserStyle from "@/styles/DisplayUsers.module.css";

const DisplayUsers = ({
	selectedClass,
	userList,
	setUserList,
	isSuccess,
	setIsSuccess,
}) => {
	// if true then display individual progress
	const [individualChecked, setIndividualChecked] = useState(true);

	// if true then open class' evaluation
	const [evaluationCheck, setEvaluationCheck] = useState(
		selectedClass.isEvaluationOpen
	);

	const [isEditMode, setIsEditMode] = useState(false);

	const handleIndividualChecked = () => {
		setIndividualChecked(!individualChecked);
	};

	const handleOpenEvaluation = () => {
		setEvaluationCheck((prevValue) => !prevValue);
		openEvaluationSwitch(selectedClass.className, !evaluationCheck);
	};

	const deleteFromUI = (userID) => {
		const newList = userList.filter((user) => user.uid !== userID);
		setUserList(newList);
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
					<div style={{ display: "flex", justifyContent: "space-between" }}>
						<div>
							<span>Tabel Grup</span>
							<Switch
								defaultChecked
								size='medium'
								color='primary'
								onChange={handleIndividualChecked}
								checked={individualChecked}
							/>
							<span>Individu</span>
						</div>
						<div>
							<span>Kunci Evaluasi</span>
							<Switch
								defaultChecked
								size='medium'
								color='primary'
								onChange={handleOpenEvaluation}
								checked={evaluationCheck}
							/>
							<span>Buka Evaluasi</span>
						</div>
					</div>

					{individualChecked ? (
						userList.map((userData) => (
							<UserCard
								userData={userData}
								key={userData.uid}
								isEditMode={isEditMode}
								deleteFromUI={deleteFromUI}
								isSuccess={isSuccess}
								setIsSuccess={setIsSuccess}
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
