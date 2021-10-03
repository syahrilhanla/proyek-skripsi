// THIS CODE IS CRUCIAL FOR ANY PROGRESS IN THE WHOLE APP

import React, { useState, createContext, useContext, useEffect } from "react";
import {
	setLocalStorage,
	getLocalUser,
	removeLocalUser,
	deleteLocalProgress,
	getLocalUserProgress,
} from "@/components/utils/userLocalSavings";
import { popup, auth } from "@/components/common/Firebase";
import { useRouter } from "next/router";

import useFireStore from "@/components/utils/useFireStore";
import useCheckAdmin from "@/components/utils/useCheckAdmin";
import {
	getAllAdminData,
	getClassList,
	getUserFirestore,
} from "@/components/utils/userFirestoreSavings";

export const AuthContext = createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	// ############# user's / student's data
	const [currentUser, setCurrentUser] = useState(null);
	const [localUserData, setLocalUserData] = useState(null);
	const [userInfo, setUserInfo] = useState(null);
	const [userProgress, setUserProgress] = useState(null);
	// ###############

	// used to determine whether page is ready to load
	const [loading, setLoading] = useState(true);

	// storing email authority
	const [isAdmin, setIsAdmin] = useState(false);

	const [classList, setClassList] = useState([]);
	const [adminList, setAdminList] = useState([]);

	// functioning as switch when localStorage is being updated
	const [LSSwitch, setLSSwitch] = useState(true);

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
		getLocalUser().then((data) => {
			setLocalUserData(data);
			setUserProgress(getLocalUserProgress(data));
		});
	}, [LSSwitch]);

	useEffect(() => {
		const unSub = auth.onAuthStateChanged((user) => {
			setUser(user).then(() => {
				try {
					setLocalStorage(user).then(() => {
						// get local user from localStorage after login and set to localStorage
						getLocalUser().then((data) => {
							setLocalUserData(data);
							setUserProgress(useFireStore(data));
							// if new user, then set userInfo with local data
							// if not, set userInfo with firebase data
							getUserFirestore(data).then((userData) => {
								if (userData === undefined) setUserInfo(data);
								else setUserInfo(userData);
							});
							setIsAdmin(useCheckAdmin(data));
							getAllAdminData().then((results) => setAdminList(results));
							getClassList().then((data) => setClassList(data));
							setLoading(false);
						});
					});
				} catch (error) {
					console.log(`failed to set user: ${error}`);
				}
			});
			return () => null;
		});

		return unSub;
	}, []);

	return (
		<AuthContext.Provider
			value={{
				currentUser,
				userInfo,
				localUserData,
				userProgress,
				loading,
				isAdmin,
				classList,
				LSSwitch,
				setLSSwitch,
				setClassList,
				login,
				signOut,
			}}
		>
			{!loading && children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
