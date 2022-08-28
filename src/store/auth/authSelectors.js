const getisLLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const authSelectors = {
  getisLLoggedIn,
  getUserName,
};

export default authSelectors;
