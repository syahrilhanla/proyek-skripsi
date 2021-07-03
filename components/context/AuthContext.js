// THIS CODE IS CRUCIAL FOR ANY PROGRESS IN THE WHOLE APP

import React, { useState, createContext, useContext, useEffect } from "react";
import {
	setLocalStorage,
	getLocalUser,
	removeLocalUser,
	deleteLocalProgress,
} from "@/components/utils/userLocalSavings";
import { popup, auth } from "@/components/common/Firebase";
import { useRouter } from "next/router";

import useFireStore from "@/components/utils/useFireStore";
import useCheckAdmin from "@/components/utils/useCheckAdmin";

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);
	const [localUserData, setLocalUserData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [userProgress, setUserProgress] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);

	const router = useRouter();

	// set user after login success
	const setUser = async (user) => {
		if (user) {
			setCurrentUser(user);
		} else return;
	};

	const login = async () => {
		// fires when user clicks login button from Home
		await popup();
	};

	const signOut = async () => {
		await auth.signOut();
		await removeLocalUser();
		deleteLocalProgress();
		setLoading(true);
		router.push("/");
	};

	useEffect(() => {
		const unSub = auth.onAuthStateChanged((user) => {
			setUser(user).then(() => {
				try {
					setLocalStorage(user).then(() => {
						// get local user from localStorage after login and set to localStorage
						getLocalUser().then((data) => {
							setLocalUserData(data);
							setUserProgress(useFireStore(data));
							setIsAdmin(useCheckAdmin(data));
							setLoading(false);
						});
					});
				} catch (error) {
					console.log(`failed to set user: ${error}`);
				}
			});
		});

		return unSub;
	}, []);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				localUserData,
				userProgress,
				loading,
				isAdmin,
				login,
				signOut,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
