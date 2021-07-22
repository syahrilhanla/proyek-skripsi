const useExtractToDisplay = (individualProgress) => {
	const chapterNames = individualProgress.map((chapter) => {
		if (chapter.chapter === "chapter1") {
			return "Menganalisis Data";
		} else if (chapter.chapter === "chapter2") {
			return "Ukuran Pemusatan Data";
		} else return "Ukuran Penyebaran Data";
	});

	const pageDetails = individualProgress.map((chapter) => {
		return chapter.data.map((page) => page.pageData.map((content) => content));
	});

	return { chapterNames, pageDetails };
};

export default useExtractToDisplay;
