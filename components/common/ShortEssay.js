import { useState } from "react";

import FormAnswer from "@/components/common/FormAnswer";
import essayStyle from "@/styles/ShortEssay.module.css";

const ShortEssay = ({ essayQuestion, setUpdateProgress, updateProgress }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	return (
		<>
			<div className={essayStyle.mother}>
				<h1>Pertanyaan Singkat</h1>
				<h4>{essayQuestion[currentQuestion].questionText}</h4>
				<FormAnswer
					answer={essayQuestion[currentQuestion].answer}
					actID={essayQuestion[currentQuestion].id}
					setUpdateProgress={setUpdateProgress}
					updateProgress={updateProgress}
					setCurrentQuestion={setCurrentQuestion}
					currentQuestion={currentQuestion}
					questionsAmount={essayQuestion.length}
				/>
			</div>
		</>
	);
};

export default ShortEssay;
