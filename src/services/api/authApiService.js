import httpService from "./httpService";
import localStorageService from "../localStorageService";

const base_url = process.env.REACT_APP_API_BASE_URL;

async function logIn(username, password) {
  const url = `${base_url}/auth/token`;
  const response = await httpService.post(url, {
    email: username,
    password: password,
    device_name: "web",
  });

  // extract the token
  const access_token = response.data.data.access_token;
  // save the token
  localStorageService.setToken(access_token);

  return response;
}

async function logOut() {
  const url = `${process.env.REACT_APP_API_BASE_URL}/logout`;
  const response = await httpService.post(url);

  localStorageService.removeToken();
  localStorageService.removeCurrentUser();

  return response;
}

//#region Private methods
//#endregion

export default {
  logIn,
  logOut,
};
