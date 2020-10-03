import httpService from "./httpService";

async function logIn(username, password) {
  const url = `${process.env.REACT_APP_API_BASE_URL}/auth/token`;
  const response = await httpService.post(url, {
    email: username,
    password: password,
    device_name: "web",
  });

  return response;
}

export default {
  login: logIn,
};
