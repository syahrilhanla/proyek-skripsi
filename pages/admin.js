import { useState } from "react";

import MainLayout from "@/components/common/MainLayout";
import { useAuth } from "@/components/context/AuthContext";
import AddClassButton from "@/components/common/AddClassButton";
import NotAdmin from "@/components/common/NotAdmin";

import AddClassModal from "@/components/common/AddClassModal";

const admin = () => {
	const { isAdmin } = useAuth();
	const [newClass, setNewClass] = useState(false);

	const Text = () => (
		<div style={{ padding: "0.8rem" }}>
			<h2>This is an admin page</h2>

			{newClass && <AddClassModal setNewClass={setNewClass} />}

			<AddClassButton setNewClass={setNewClass} />
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
