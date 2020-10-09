//#region Token
function getToken() {
  return localStorage.getItem("access_token");
}

function setToken(token) {
  localStorage.setItem("access_token", token);
  sessionStorage.setItem("access_token", token);
}

function removeToken() {
  localStorage.removeItem("access_token");
  sessionStorage.removeItem("access_token");
}
//#endregion

//#region CurrentUser
function getCurrentUser() {
  return JSON.parse(localStorage.getItem("current_user"));
}

function setCurrentUser(user) {
  localStorage.setItem("current_user", JSON.stringify(user));
  sessionStorage.setItem("current_user", JSON.stringify(user));
}

function removeCurrentUser(user) {
  localStorage.removeItem("current_user");
  sessionStorage.removeItem("current_user");
}
//#endregion

export default {
  // access_token
  getToken,
  setToken,
  removeToken,
  // currentUser
  getCurrentUser,
  setCurrentUser,
  removeCurrentUser,
};
