import { useState } from "react";

import FormAnswer from "@/components/common/FormAnswer";
import essayStyle from "@/styles/ShortEssay.module.css";

const ShortEssay = ({ essayQuestion, setUpdateProgress, updateProgress }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0);

	return (
		<>
			<div className={essayStyle.mother}>
				<h1>Pertanyaan Singkat</h1>
				<h4>{essayQuestion.question[currentQuestion].questionText}</h4>
				{essayQuestion.Data && (
					<div className={essayStyle.data}>{essayQuestion.Data()}</div>
				)}
				<FormAnswer
					answer={essayQuestion.question[currentQuestion].answer}
					actID={essayQuestion.question[currentQuestion].id}
					setUpdateProgress={setUpdateProgress}
					updateProgress={updateProgress}
					setCurrentQuestion={setCurrentQuestion}
					currentQuestion={currentQuestion}
					questionsAmount={essayQuestion.question.length}
				/>
			</div>
		</>
	);
};

export default ShortEssay;
