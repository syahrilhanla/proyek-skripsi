import { useForm } from "react-hook-form";
import { useAuth } from "@/components/context/AuthContext";

import formStyle from "@/styles/Form.module.css";
import selectStyle from "@/styles/Select.module.css";

const ClassDropDown = ({ setShowClass }) => {
	const { classList } = useAuth();

	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		setShowClass(true);
	};

	return (
		<div className={selectStyle.dropdown}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<select
					{...register("gender", { required: true })}
					className={selectStyle.select}
				>
					{classList.map((item) => {
						return <option value={item.className}>{item.className}</option>;
					})}
				</select>
				<input type='submit' className={formStyle.submitButton} />
			</form>
		</div>
	);
};

export default ClassDropDown;
