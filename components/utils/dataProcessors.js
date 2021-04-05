// extracting chapter(n)Data to have pages as key objects and acts per page as its value
export const dataExtractor = (chapter) => {
	return chapter.map((pageData, pageIndex) => {
		return {
			page: `page${pageIndex + 1}`,
			pageData: pageData.acts,
		};
	});
};

// counting progress data as percentage to be displayed in ProgressBar component
export const countProgress = (dataProgress) => {
	dataProgress.map((item) => console.log(item));
};

// used in dataSeparator below
const pageProgresses = (chapterProgress) => {
	// expected output:
	// { page: String, pageData: Array }

	// returns only as singular array with pageData in it
	return chapterProgress.map((item) => {
		return item.data.map((pageData) => pageData);
	})[0];
};

// separates data from array to each chapter with pages them at ProgressContext
export const dataSeparator = (data, chapterName) =>
	pageProgresses(data.filter((item) => item.chapter === chapterName));
