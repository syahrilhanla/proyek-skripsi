import { useForm } from "react-hook-form";
import formStyle from "@/styles/Form.module.css";
import { addClass } from "@/components/utils/userFirestoreSavings";

const NewClassForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => {
		console.log(data);
		addClass(data.className);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label>Isi Nama Kelas:</label>
				<input
					{...register("className", { required: true })}
					className={formStyle.formInput}
				/>
				{errors.className?.type === "required" && (
					<p className={formStyle.errorMsg}>Isi Nama Kelas!</p>
				)}
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default NewClassForm;
