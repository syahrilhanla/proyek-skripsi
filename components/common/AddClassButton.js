import quizStyle from "@/styles/QuizStyle.module.css";
import AddIcon from "@material-ui/icons/Add";

const AddClassButton = ({ setNewClass }) => {
	return (
		<button
			className={quizStyle.addClass}
			onClick={() => {
				setNewClass(true);
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
					<p style={{ textAlign: "center" }}>Buat Kelas</p>
				</span>
			</div>
		</button>
	);
};

export default AddClassButton;
