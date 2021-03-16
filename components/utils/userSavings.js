// set user from authentication to localStorage
export const setLocalUser = (currentUser) => {
  if (localStorage.getItem('user') === null) {
    console.log(currentUser)
    localStorage.setItem('user', JSON.stringify(currentUser));
  }
}

// Get local user immediately after login attempt
export const getLocalUser = (user) => {
  if (user) {
    const localUser = JSON.parse(localStorage.getItem('user'));
    console.log(localUser);
    return localUser;
  }
}

// remove local user when signing out
export const removeLocalUser = () => {
  if (localStorage.getItem('user')) {
    localStorage.removeItem('user');
  }
}