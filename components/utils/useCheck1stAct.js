import useGetChapterProgress from "@/components/utils/useGetChapterProgress";

const useCheck1stAct = async (actID, parentPath, currentPath) => {
	let isCompleted = false;
	if (actID) {
		const { chapterProgress } = await useGetChapterProgress(parentPath);
		const currentPage = `page${currentPath}`;

		if (chapterProgress) {
			// get the certain act to check
			chapterProgress.map((item) => {
				if (item.page === currentPage) {
					item.pageData.map((data) => {
						if (data.name === actID) {
							if (data.act === true) isCompleted = true;
						}
					});
				}
			});
		}
	}

	return isCompleted;
};

export default useCheck1stAct;
