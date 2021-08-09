import styling from "@/styles/ShortEssay.module.css";

const LearningObjectives = ({ objectives }) => {
	return (
		<div className={styling.mother}>
			<h1>Tujuan Pembelajaran</h1>
			<ul>
				{objectives.map((item) => (
					<li key={item}>
						<p>{item}</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LearningObjectives;
