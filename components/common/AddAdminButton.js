import quizStyle from "@/styles/QuizStyle.module.css";
import AddIcon from "@material-ui/icons/Add";

const AddAdminButton = ({ setNewAdmin }) => {
	return (
		<button
			className={quizStyle.addClass}
			onClick={() => {
				setNewAdmin(true);
			}}
		>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<AddIcon />
				<span>
					<p style={{ textAlign: "center" }}>Tambah Admin</p>
				</span>
			</div>
		</button>
	);
};

export default AddAdminButton;
