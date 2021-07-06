import formStyle from "@/styles/Form.module.css";
import selectStyle from "@/styles/Select.module.css";
import { useForm } from "react-hook-form";

const ClassDropDown = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div className={selectStyle.dropdown}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<select {...register("gender")} className={selectStyle.select}>
					<option value='female'>female</option>
					<option value='male'>male</option>
					<option value='other'>other</option>
				</select>
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default ClassDropDown;
