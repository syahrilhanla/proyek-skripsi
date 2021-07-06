import { useForm } from "react-hook-form";
import formStyle from "@/styles/Form.module.css";

const HookForm = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("className", { required: true })}
					className={formStyle.formInput}
				/>
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default HookForm;
