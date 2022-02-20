import { useEffect, useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import { firestore } from "@/components/common/Firebase";

const useLockEvaluation = () => {
	const { userInfo, userClass } = useAuth();
	const [isEvaluationOpen, setIsEvaluationOpen] = useState(true);

	useEffect(() => {
		if (userInfo !== null) {
			if (userInfo.className !== "Belum Masuk Kelas") {
				const snapShotData = firestore
					.collection("classNames")
					.doc(userInfo.className)
					.onSnapshot((doc) =>
						setIsEvaluationOpen(doc.data().isEvaluationOpen)
					);
				return () => snapShotData();
			} else if (userClass !== "Belum Masuk Kelas") {
				const snapShotData = firestore
					.collection("classNames")
					.doc(userClass)
					.onSnapshot((doc) =>
						setIsEvaluationOpen(doc.data().isEvaluationOpen)
					);
				return () => snapShotData();
			} else console.log({ userClass });
		}

		// console.log({ isEvaluationOpen });
	}, [userClass, isEvaluationOpen, userInfo]);

	return { isEvaluationOpen };
};

export default useLockEvaluation;
