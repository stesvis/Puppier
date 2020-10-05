import httpService from "./httpService";

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

  localStorage.setItem("currentUser", currentUser);
  sessionStorage.setItem("currentUser", currentUser);

  return response;
}

export default {
  all,
  me,
};
