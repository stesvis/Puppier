import httpService from "./httpService";
import localStorageService from "../localStorageService";

const base_url = `${process.env.REACT_APP_API_BASE_URL}/users`;
async function all() {
  const url = base_url;
  // console.log(url);
  const response = await httpService.get(url);
  return response;
}

async function me() {
  const url = `${base_url}/me`;
  // console.log(url);
  const response = await httpService.get(url);
  const currentUser = response.data.data;
  localStorageService.setCurrentUser(currentUser);

  return response;
}

async function register(name, username, password, password_confirmation) {
  const url = `${base_url}`;

  const response = await httpService.post(url, {
    name: name,
    email: username,
    password: password,
    password_confirmation: password_confirmation,
  });

  return response;
}

export default {
  all,
  me,
  register,
};
