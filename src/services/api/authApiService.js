import httpService from "./httpService";

const base_url = `${process.env.REACT_APP_API_BASE_URL}/auth`;

async function logIn(username, password) {
  const url = `${base_url}/token`;
  const response = await httpService.post(url, {
    email: username,
    password: password,
    device_name: "web",
  });

  // extract the token
  const access_token = response.data.data.access_token;
  // save the token
  localStorage.setItem("access_token", access_token);
  sessionStorage.setItem("access_token", access_token);
  httpService.setToken(access_token);

  return response;
}

export default {
  login: logIn,
};
