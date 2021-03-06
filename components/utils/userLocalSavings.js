// set user from authentication to localStorage
export const setLocalStorage = async (currentUser) => {
	if (localStorage.getItem("user") === null && currentUser !== null) {
		localStorage.setItem("user", JSON.stringify(currentUser));
	}
};

// Get local user immediately after login attempt
export const getLocalUser = async () => {
	try {
		const localUser = JSON.parse(localStorage.getItem("user"));
		return {
			displayName: localUser.displayName,
			email: localUser.email,
			uid: localUser.uid,
			photoURL: localUser.photoURL,
			className: localUser.className,
		};
	} catch (error) {
		console.log("try to fetch from localStorage or logged out");
	}
};

// remove local user when signing out
export const removeLocalUser = async () => {
	if (localStorage.getItem("user")) {
		localStorage.removeItem("user");
	}
};

// set userProgress to localStorage
export const setLocalProgress = async (collection, userProgress) => {
	if (userProgress) {
		if (localStorage.getItem(collection) !== null) {
			localStorage.removeItem(collection);
		}

		localStorage.setItem(collection, JSON.stringify(userProgress));
	}
};

export const getLocalUserProgress = async (collection) => {
	if (localStorage.getItem(collection) !== null) {
		return await JSON.parse(localStorage.getItem(collection));
	}
};

export const deleteLocalProgress = () => {
	localStorage.removeItem("chapter1");
	localStorage.removeItem("chapter2");
	localStorage.removeItem("chapter3");
};

export const updateLocalProgress = (collection, newData) => {
	localStorage.setItem(collection, JSON.stringify(newData));
};
