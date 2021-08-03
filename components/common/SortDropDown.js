import { useForm } from "react-hook-form";

import selectStyle from "@/styles/Select.module.css";

const SortDropDown = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className={selectStyle.dropdown}>
			<form onChange={handleSubmit(onSubmit)}>
				<select {...register("className")} className={selectStyle.select}>
					<option key='Tertinggi' value='Tertinggi'>
						Nilai Tertinggi
					</option>
					<option key='Terendah' value='Terendah'>
						Nilai Terendah
					</option>
				</select>
			</form>
		</div>
	);
};

export default SortDropDown;
