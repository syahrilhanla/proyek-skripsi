import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";

import MainLayout from "@/components/common/MainLayout";
import AddClassButton from "@/components/common/AddClassButton";
import NotAdmin from "@/components/common/NotAdmin";
import AddClassModal from "@/components/common/AddClassModal";

import adminStyle from "@/styles/Admin.module.css";

const admin = () => {
	const { isAdmin } = useAuth();
	const [newClass, setNewClass] = useState(false);

	const Text = () => (
		<div className={adminStyle.mother}>
			{/* shows modal with form to add new class */}
			{newClass && <AddClassModal setNewClass={setNewClass} />}

			<span style={{ marginRight: "0px" }}>
				<AddClassButton setNewClass={setNewClass} />
			</span>
		</div>
	);

	return (
		<>
			{isAdmin ? (
				<>
					<MainLayout Child1={Text} title={"Menganalisis Data"} />
				</>
			) : (
				<NotAdmin />
			)}
		</>
	);
};

export default admin;
