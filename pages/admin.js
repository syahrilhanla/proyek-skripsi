import { useState } from "react";
import { useAuth } from "@/components/context/AuthContext";

import MainLayout from "@/components/common/MainLayout";
import AddClassButton from "@/components/common/AddClassButton";
import NotAdmin from "@/components/common/NotAdmin";
import AddClassModal from "@/components/common/AddClassModal";
import ClassDropDown from "@/components/common/ClassDropDown";
import DisplayUsers from "@/components/common/DisplayUsers";

import adminStyle from "@/styles/Admin.module.css";

const admin = () => {
	const { isAdmin } = useAuth();

	const [newClass, setNewClass] = useState(false);
	const [showClass, setShowClass] = useState(false);
	const [selectedClass, setSelectedClass] = useState("");

	const AdminBody = () => (
		<div className={adminStyle.mother}>
			{/* shows modal with form to add new class */}
			{newClass && <AddClassModal setNewClass={setNewClass} />}

			<div className={adminStyle.classMenu}>
				<span className={adminStyle.pickClass}>
					<h2>Pilih Kelas</h2>
					<ClassDropDown
						setShowClass={setShowClass}
						setSelectedClass={setSelectedClass}
					/>
				</span>
				<span className={adminStyle.addClass}>
					<AddClassButton setNewClass={setNewClass} />
				</span>
			</div>

			{showClass && <DisplayUsers selectedClass={selectedClass} />}
		</div>
	);

	return (
		<>
			{isAdmin ? (
				<>
					<MainLayout Child1={AdminBody} title={"Menganalisis Data"} />
				</>
			) : (
				<NotAdmin />
			)}
		</>
	);
};

export default admin;
