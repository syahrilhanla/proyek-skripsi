import { useState, useEffect } from "react";
import { useAuth } from "@/components/context/AuthContext";

import MainLayout from "@/components/common/MainLayout";
import AddClassButton from "@/components/common/AddClassButton";
import NotAdmin from "@/components/common/NotAdmin";
import AddClassModal from "@/components/common/AddClassModal";
import ClassDropDown from "@/components/common/ClassDropDown";
import DisplayUsers from "@/components/common/DisplayUsers";
import SortDropDown from "@/components/common/SortDropDown";

import useGetUserForAdmin from "@/components/utils/useGetUsersForAdmin";
import useSortUsers from "@/components/utils/useSortUsers";

import adminStyle from "@/styles/Admin.module.css";

const admin = () => {
	const { isAdmin, setClassList } = useAuth();

	const [newClass, setNewClass] = useState(false);
	const [showClass, setShowClass] = useState(false);
	const [selectedClass, setSelectedClass] = useState("");
	const [userList, setUserList] = useState([]);
	const [sortUsers, setSortUsers] = useState("");

	const { filteredUsers } = useGetUserForAdmin(selectedClass);

	useEffect(() => {
		setUserList(filteredUsers);
	}, [selectedClass]);

	useEffect(() => {
		const { topUsers, bottomUsers } = useSortUsers(filteredUsers);
		if (sortUsers === "Tertinggi") setUserList(topUsers);
		else setUserList(bottomUsers);
	}, [sortUsers]);

	const AdminBody = () => (
		<div className={adminStyle.mother}>
			{/* shows modal with form to add new class */}
			{newClass && (
				<AddClassModal setNewClass={setNewClass} setClassList={setClassList} />
			)}

			<div className={adminStyle.classMenu}>
				<span className={adminStyle.pickClass}>
					<h2>Pilih Kelas</h2>
					<ClassDropDown
						setShowClass={setShowClass}
						setSelectedClass={setSelectedClass}
					/>
				</span>

				{selectedClass !== "" && (
					<span className={adminStyle.pickClass} style={{ marginLeft: "1rem" }}>
						<h2>Urutkan</h2>
						<SortDropDown setSortUsers={setSortUsers} />
					</span>
				)}

				<span className={adminStyle.addClass}>
					<AddClassButton setNewClass={setNewClass} />
				</span>
			</div>

			{showClass && (
				<DisplayUsers selectedClass={selectedClass} userList={userList} />
			)}
		</div>
	);

	return (
		<>
			{isAdmin ? (
				<>
					<MainLayout Child1={AdminBody} title={""} />
				</>
			) : (
				<NotAdmin />
			)}
		</>
	);
};

export default admin;
