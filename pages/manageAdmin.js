import { useAuth } from "@/components/context/AuthContext";

import MainLayout from "@/components/common/MainLayout";
import NotAdmin from "@/components/common/NotAdmin";

const manageAdmin = () => {
	const { isAdmin } = useAuth();

	const PageBody = () => <div>Admin Management</div>;
	return (
		<>
			{isAdmin ? (
				<>
					<MainLayout Child1={PageBody} title={"Daftar Admin"} />{" "}
				</>
			) : (
				<NotAdmin />
			)}
		</>
	);
};

export default manageAdmin;
