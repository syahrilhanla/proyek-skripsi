import { useForm } from "react-hook-form";

import formStyle from "@/styles/Form.module.css";

const FormAnswer = ({ answer }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const checkAnswer = (answer, data) => {
		if (answer === data) console.log("you got that right kiddo!");
		else console.log("nuh uh!");
	};

	const onSubmit = (data) => {
		console.log(data);
		checkAnswer(answer, data.userAnswer);
	};
	console.log(errors);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
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
