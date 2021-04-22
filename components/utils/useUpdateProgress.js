// update user progress on page
const useUpdateProgress = (currentPage) => {
  console.log(currentPage);
  const newData = {
    page: 'pageN',
    pageData: [
      { act: 'this is an act' }
    ]
  }

  // updateLocalProgress('chapter1', newData);
};

export default useUpdateProgress;