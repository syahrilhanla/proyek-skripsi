import userCardStyles from "@/styles/UserCard.module.css";

const CheckboxDetails = ({ chapterDetails }) => {
	const randomKey = () => Math.random() * 100000;
	return (
		<div>
			{chapterDetails.map((details) => {
				return details.map((item) => {
					return (
						<div key={randomKey()} className={userCardStyles.checkboxList}>
							<p key={randomKey()}>{item.desc}</p>
							<span>
								<input
									type='checkbox'
									checked={item.act}
									key={randomKey()}
									readOnly={true}
								/>
							</span>
						</div>
					);
				});
			})}
		</div>
	);
};

export default CheckboxDetails;
