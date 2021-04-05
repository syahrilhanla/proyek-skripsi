// extracting chapter(n)Data to have pages as key objects and acts per page as its value
export const dataExtractor = (chapter) => {
	return chapter.map((pageData, pageIndex) => {
		return {
			page: `page${pageIndex + 1}`,
			pageData: pageData.acts,
		};
	});
};

// separates data from array to each chapter in ProgressContext
export const dataSeparator = (data, chapterName) =>
	data.filter((item) => item.chapter === chapterName);

// counting progress data as percentage to be displayed in ProgressBar component
export const countProgress = (dataProgress) => {
	dataProgress.map((item) => console.log(item));
};
