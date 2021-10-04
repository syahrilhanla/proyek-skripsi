import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";

import MainLayout from "@/components/common/MainLayout";
import NotAdmin from "@/components/common/NotAdmin";
import AddAdminModal from "@/components/common/AddAdminModal";
import AddAdminButton from "@/components/common/AddAdminButton";

const manageAdmin = () => {
	const [newAdmin, setNewAdmin] = useState(false);
	const { isAdmin, adminList, setAdminList } = useAuth();

	console.log({ adminList });

	const PageBody = () => {
		return (
			<div>
				{newAdmin && (
					<AddAdminModal
						setNewAdmin={setNewAdmin}
						newAdmin={newAdmin}
						setAdminList={setAdminList}
					/>
				)}
				<h2>Daftar Admin</h2>
				<AddAdminButton setNewAdmin={setNewAdmin} />
				{adminList.map((admin) => (
					<h4>{admin.displayName}</h4>
				))}
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
