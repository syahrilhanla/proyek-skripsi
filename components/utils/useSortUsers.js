const useSortUsers = (filteredUsers) => {
	const sortAscending = (filteredUsers) => {
		const sortedArr = [...filteredUsers];
		sortedArr.sort((a, b) => a.score - b.score);
		return sortedArr;
	};

	const sortDescending = (filteredUsers) => {
		const sortedArr = [...filteredUsers];
		sortedArr.sort((a, b) => b.score - a.score);
		return sortedArr;
	};

	const topUsers = sortDescending(filteredUsers);
	const bottomUsers = sortAscending(filteredUsers);

	return { topUsers, bottomUsers };
};

export default useSortUsers;
