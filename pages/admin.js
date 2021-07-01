import MainLayout from "@/components/common/MainLayout";

const admin = () => {
	const Text = () => (
		<div style={{ padding: "0.8rem" }}>
			<h2>This is an admin page</h2>
		</div>
	);
	return (
		<>
			<MainLayout Child1={Text} title={"Menganalisis Data"} />
		</>
	);
};

export default admin;
