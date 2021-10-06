import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";

import { Delete } from "@material-ui/icons";
import { Button } from "@material-ui/core";

import MainLayout from "@/components/common/MainLayout";
import NotAdmin from "@/components/common/NotAdmin";
import AddAdminModal from "@/components/common/AddAdminModal";
import AddAdminButton from "@/components/common/AddAdminButton";
import SuccessNotification from "@/components/common/PushNotification";

import { deleteAdminDocument } from "@/components/utils/userFirestoreSavings";

import ManageAdminStyles from "@/styles/ManageAdmin.module.css";
const manageAdmin = () => {
	const [newAdmin, setNewAdmin] = useState(false);
	const [isEditMode, setIsEditMode] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [isDefaultAdmin, setIsDefaultAdmin] = useState("");

	const { isAdmin, adminList, setAdminList } = useAuth();

	if (isSuccess === true) setTimeout(() => setIsSuccess(false), 3000);

	const deleteFromUI = (adminDisplayName) => {
		if (!adminDisplayName.isDefaultAdmin) {
			const newList = adminList.filter(
				(admin) => admin.displayName !== adminDisplayName.displayName
			);
			console.log({ newList });
			setAdminList(newList);
		} else console.log({ isDefaultAdmin });
	};

	const PageBody = () => {
		return (
			<div className={ManageAdminStyles.mother}>
				<SuccessNotification open={isSuccess} type={isDefaultAdmin} />
				{newAdmin && (
					<AddAdminModal
						setNewAdmin={setNewAdmin}
						newAdmin={newAdmin}
						setAdminList={setAdminList}
					/>
				)}
				<h2>Daftar Admin</h2>

				<span className={ManageAdminStyles.addButton}>
					<AddAdminButton setNewAdmin={setNewAdmin} />
					<Button
						variant={isEditMode ? "outlined" : "contained"}
						color='secondary'
						onClick={() => setIsEditMode(!isEditMode)}
					>
						<Delete /> Edit User
					</Button>
				</span>
				<span className={ManageAdminStyles.adminMother}>
					{adminList.map((admin) => (
						<div className={ManageAdminStyles.adminCard}>
							<span className={ManageAdminStyles.textInfo}>
								<p className={ManageAdminStyles.displayName}>
									Nama: {admin.displayName}
								</p>
								<p className={ManageAdminStyles.email}>Email: {admin.email}</p>
							</span>
							{isEditMode && (
								<span style={{ marginRight: "1.6rem" }}>
									<Button
										variant='contained'
										color='secondary'
										onClick={() => {
											setIsDefaultAdmin(() => {
												if (deleteAdminDocument(admin)) return "success";
												else return "error";
											});
											setIsSuccess(true);
											deleteFromUI(admin);
										}}
									>
										X
									</Button>
								</span>
							)}
						</div>
					))}
				</span>
			</div>
		);
	};
	return (
		<>
			{isAdmin ? (
				<>
					<MainLayout Child1={PageBody} title={""} />{" "}
				</>
			) : (
				<NotAdmin />
			)}
		</>
	);
};

export default manageAdmin;
