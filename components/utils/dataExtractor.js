// extracting chapter(n)Data to have pages as key objects and acts per page as its value
export const dataExtractor = (chapter) => {
  return chapter.map((pageData, pageIndex) => {
    const key = `page${pageIndex + 1}`
    return {
      [key]: pageData.acts
    }
  });
}