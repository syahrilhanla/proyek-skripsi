// set user from authentication to localStorage
export const setLocalUser = async (currentUser) => {
  if (localStorage.getItem('user') === null) {
    console.log(currentUser)
    localStorage.setItem('user', JSON.stringify(currentUser));
  }
}

// Get local user immediately after login attempt
export const getLocalUser = async () => {
  try {
    const localUser = JSON.parse(localStorage.getItem('user'));
    console.log(localUser.displayName);
    return {
      displayName: localUser.displayName,
      email: localUser.email,
      uid: localUser.uid,
      photoURL: localUser.photoURL
    };
  } catch (error) {
    console.log(error);
  }
}

// remove local user when signing out
export const removeLocalUser = () => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user');
  }
}