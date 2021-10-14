import quizStyle from "@/styles/QuizStyle.module.css";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const AddAdminButton = ({ setNewAdmin }) => {
	return (
		<>
			<Button
				variant={"contained"}
				color='primary'
				onClick={() => {
					setNewAdmin(true);
				}}
			>
				<AddIcon />
				Tambah Admin
			</Button>
			{/* <button
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
		</button> */}
		</>
	);
};

export default AddAdminButton;
