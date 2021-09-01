import { useState } from "react";
import { useForm } from "react-hook-form";
import formStyle from "@/styles/Form.module.css";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";
import useUpdateCertainAct from "@/components/utils/useUpdateCertainAct";

const FormAnswer = ({ answer, actID, setUpdateProgress, updateProgress }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const [feedback, setFeedback] = useState("");

	const { parentPath, currentPath } = useGetCurrentPage();

	const checkAnswer = async (answer, data) => {
		if (answer === data) {
			setFeedback("Jawaban Benar!");
			setTimeout(() => setFeedback(""), 3000);
			await useUpdateCertainAct(actID, parentPath, currentPath);
			setUpdateProgress(!updateProgress);
		} else {
			setFeedback("Jawaban Salah!");
			setTimeout(() => setFeedback(""), 3000);
		}
	};

	const onSubmit = (data) => {
		checkAnswer(answer, data.userAnswer.toString());
	};
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{feedback !== "" && (
				<h4
					style={
						feedback === "Jawaban Salah!"
							? { color: "red", textAlign: "center" }
							: { color: "green", textAlign: "center" }
					}
				>
					{feedback}
				</h4>
			)}
			<input
				type='text'
				placeholder='Masukkan Jawaban...'
				{...register("userAnswer", { required: true, maxLength: 12 })}
				className={formStyle.formInput}
			/>

			<input type='submit' className={formStyle.submitButton} />
		</form>
	);
};

export default FormAnswer;
