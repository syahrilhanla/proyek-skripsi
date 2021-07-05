import quizStyle from "@/styles/QuizStyle.module.css";
import AddIcon from "@material-ui/icons/Add";

const AddClassButton = () => {
	return (
		<button className={quizStyle.addClass}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<AddIcon />
				<span>
					<p style={{ textAlign: "center" }}>New Class</p>
				</span>
			</div>
		</button>
	);
};

export default AddClassButton;
