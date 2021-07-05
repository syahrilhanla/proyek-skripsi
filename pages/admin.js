import MainLayout from "@/components/common/MainLayout";
import { useAuth } from "@/components/context/AuthContext";

import AddClassButton from "@/components/common/AddClassButton";

const admin = () => {
	const { isAdmin } = useAuth();

	const Text = () => (
		<div style={{ padding: "0.8rem" }}>
			<h2>This is an admin page</h2>
			<AddClassButton />
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
