import { useForm } from "react-hook-form";

import selectStyle from "@/styles/Select.module.css";

const SortDropDown = ({ setSortUsers }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		// console.log(data);
		setSortUsers(data.sortBy);
	};

	return (
		<div className={selectStyle.dropdown}>
			<form onChange={handleSubmit(onSubmit)}>
				<select {...register("sortBy")} className={selectStyle.select}>
					<option
						key='Berdasarkan Nilai'
						value='Berdasarkan Nilai'
						defaultValue
					>
						Urut Berdasarkan Nilai
					</option>
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
